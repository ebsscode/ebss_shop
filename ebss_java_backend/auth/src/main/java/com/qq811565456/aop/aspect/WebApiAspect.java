package com.qq811565456.aop.aspect;

import com.qq811565456.*;
import com.qq811565456.aop.annotation.WebApi;
import com.qq811565456.dao.UserDao;
import com.qq811565456.mapper.MchMapper;
import com.qq811565456.mapper.SysModuleMapper;
import com.qq811565456.model.Mch;
import com.qq811565456.model.SysModule;
import com.qq811565456.model.SysUser;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

/**
 * @Author qq811565456
 * @Date 2022/8/11 16:56
 */
@Aspect
@Slf4j
@Component
public class WebApiAspect {
  @Autowired
  private SysModuleMapper sysModuleMapper;
  @Autowired
  private UserDao userDao;
  @Autowired
  private MchMapper mchMapper;

  @Pointcut("@annotation(com.qq811565456.aop.annotation.WebApi)")
  public void logAndValidate() {
  }

  @Around("logAndValidate()")
  public Object around(ProceedingJoinPoint joinPoint) throws InstantiationException, IllegalAccessException {
    Method method = null;
    try {
      method = ((MethodSignature) joinPoint.getSignature()).getMethod();
      String[] parameterNames = ((MethodSignature) joinPoint.getSignature()).getParameterNames();
      List<String> params = Arrays.asList(parameterNames);
      boolean printLog = method.getAnnotation(WebApi.class).printLog();
      Object[] args = joinPoint.getArgs();
      boolean checkLoginStatus = method.getAnnotation(WebApi.class).checkLoginStatus();
//      PermissionEnum[] permissionEnums = m.getAnnotation(WebApi.class).permission();
      HttpServletRequest request = RequestUtil.getRequest();

      //校验登录态
      if (checkLoginStatus) {
        SysUser sysUser = checkLoginStatus();
        request.setAttribute("user", sysUser);
        request.setAttribute("user_id", sysUser.getUserId());
//        permissionComponent.checkPermission(permissionEnums);
      }

      Integer mch_id = RequestUtil.getMchId();
      if(NumberUtil.has(mch_id)){
        Mch mch = mchMapper.selectById(mch_id);
        if(mch!=null){
          request.setAttribute("mch", mch);
        }
      }
      Integer module_id = RequestUtil.getModuleId();
      if(NumberUtil.has(module_id)){
        SysModule module = sysModuleMapper.selectById(module_id);
        if(module!=null){
          request.setAttribute("module", module);
        }
      }

      Object result = joinPoint.proceed();
      if (printLog) {
        log.info("method:"+method.getName() + ",result:{}", JsonUtil.objectToJson(result));
      }
      return result;
    }catch (Exception e) {
      e.printStackTrace();
      return getExceptionResponse(e);
    } catch (Throwable e) {
      e.printStackTrace();
      return Response.fail(MessageCode.ERROR,"Throwable:"+e.getMessage(), Map.of("trace",e.getStackTrace()));
    } finally {
    }
  }

  private Object getExceptionResponse(Exception e) {
    MessageCode messageCode = e instanceof MyException ? MessageCode.create(((MyException) e).getCode(), e.getMessage()) : MessageCode.create(MessageCode.ERROR.getCode(), e.getMessage());
    log.error("system error around aop code: {},msg: {}", messageCode.getCode(),messageCode.getMsg());
    return Response.fail(messageCode,messageCode.getMsg(),Map.of("trace",e.getStackTrace()));
  }

  public SysUser checkLoginStatus() {
    String token = RequestUtil.getToken();
    if (null == token) {
      throw new MyException(MessageCode.LOGIN);
    }
    SysUser sysUser = userDao.tokenToUser(token);
    if (null==sysUser) {
      throw new MyException(MessageCode.LOGIN);
    }
    return sysUser;
  }

}
