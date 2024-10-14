package com.qq811565456;

import cn.hutool.core.util.StrUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/**
 * @Author He Wei
 * @Date 2022/8/22 14:01
 */
public class RequestUtil {
  private static final String UNKNOW_IP = "unknown";

  /**
   * 获取当前 Request
   */
  public static HttpServletRequest getRequest() {
    return ((ServletRequestAttributes) (RequestContextHolder
        .currentRequestAttributes())).getRequest();
  }

  public static String getHeaderValue(String headerName) {
    HttpServletRequest request = getRequest();
    return request.getHeader(headerName);
  }

  public static Integer getMchId() {
    return StrUtil.isEmpty(getHeaderValue("mch-id"))?null:Integer.parseInt(getHeaderValue("mch-id"));
  }
  public static String getToken() {
    return getHeaderValue("token");
  }
  public static Integer getModuleId() {
    String s = StrUtil.isEmpty(getHeaderValue("active-module-id"))?getHeaderValue("base-module-id"):!StrUtil.isEmpty(getHeaderValue("active-module-id"))?getHeaderValue("active-module-id"):"1";
    return Integer.valueOf(s);
  }

  public static String getUrl() {
    HttpServletRequest request = getRequest();
    return request.getRequestURL().toString();
  }
  public static String getIp() {
    HttpServletRequest request = getRequest();
    String ip = request.getHeader("J-Forwarded-For");
    if (ip == null || ip.length() == 0 || UNKNOW_IP.equalsIgnoreCase(ip)) {
      ip = request.getHeader("X-Forwarded-For");
      if (ip == null || ip.length() == 0 || UNKNOW_IP.equalsIgnoreCase(ip)) {
        ip = request.getHeader("Proxy-Client-IP");
      }

      if (ip == null || ip.length() == 0 || UNKNOW_IP.equalsIgnoreCase(ip)) {
        ip = request.getHeader("WL-Proxy-Client-IP");
      }

      if (ip == null || ip.length() == 0 || UNKNOW_IP.equalsIgnoreCase(ip)) {
        ip = request.getRemoteAddr();
      }

      if (ip != null) {
        int position = ip.indexOf(',');
        if (position > 0) {
          ip = ip.substring(0, position);
        }
      }
    }
    return ip;
  }
}
