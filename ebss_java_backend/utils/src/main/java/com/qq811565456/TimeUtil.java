package com.qq811565456;

import cn.hutool.core.date.DateTime;
import cn.hutool.core.date.LocalDateTimeUtil;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

/**
 * @Author hewei
 * @Date 2022-08-12 14:30
 */
public class TimeUtil {
    public static Integer getTime10(){
        return Math.toIntExact(DateTime.now().getTime() / 1000);
    }
    public static Integer todayStart(){
        Date beginOfDay =  cn.hutool.core.date.DateUtil.beginOfDay(new Date());
        return Math.toIntExact(beginOfDay.getTime() / 1000);
    }
    public static Integer todaySeconds(){
        Date data = new Date();
        data.getHours();
                
        return  getTime10()-todayStart();
    }

}