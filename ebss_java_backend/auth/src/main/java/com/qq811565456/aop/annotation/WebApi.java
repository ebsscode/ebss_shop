package com.qq811565456.aop.annotation;

import org.springframework.web.bind.annotation.CrossOrigin;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @Author qq811565456
 * @Date 2022/8/10 17:02
 */
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface WebApi {

  //校验登录态
  boolean checkLoginStatus() default true;

  //数组里面包含任意一个权限就算通过
//  PermissionEnum[] permission() default PermissionEnum.NO_NEED_TO_PERMISSION;

  //是否打印日志
  boolean printLog() default false;
}