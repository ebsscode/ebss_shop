package com.qq811565456;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.WeekFields;
import java.util.Calendar;
import java.util.Date;

/**
 * @Author hewei
 * @Date 2022/09/01 17:59
 */
public class DateUtil {

  private static final String DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";
  private static final String DATE_FORMAT = "yyyy-MM-dd";
  private static final String NUMBER_DATE_FORMAT = "yyyyMMdd";

  public static LocalDateTime formatToLdt(String time, String formatStr) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern(formatStr);
    return LocalDateTime.parse(time, formatter);
  }


  public static Date formatToDate(String time, String formatStr) {
    return ldtToDate(formatToLdt(time, formatStr));
  }

  public static String formatLdtToStr(LocalDateTime ldt, String formatStr) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern(formatStr);
    return ldt.format(formatter);
  }

  public static String formatDateToStr(Date date, String formatStr) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern(formatStr);
    return formatter.format(dateToLdt(date));
  }

  public static int formatDateToNumberDate(Date date) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern(NUMBER_DATE_FORMAT);
    return Integer.parseInt(formatter.format(dateToLdt(date)));
  }

  public static Date formatToDate(String time) {
    return formatToDate(time, DATE_FORMAT);
  }

  public static Date formatToDateTime(String time) {
    return formatToDate(time, DATE_TIME_FORMAT);
  }

  public static String formatDateToDateStr(Date date) {
    return formatDateToStr(date, DATE_FORMAT);
  }

  public static String formatDateToDtStr(Date date) {
    return formatDateToStr(date, DATE_TIME_FORMAT);
  }

  public static Date ldtToDate(LocalDateTime localDateTime) {
    return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
  }

  public static LocalDateTime dateToLdt(Date date) {
    return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
  }

  public static String getWeekYear(LocalDateTime ldt) {
    WeekFields weekFields = WeekFields.of(DayOfWeek.MONDAY, 4);
    int week = ldt.get(weekFields.weekOfWeekBasedYear());
    int year = ldt.get(weekFields.weekBasedYear());
    return year + String.format("%0" + 2 + "d", week);
  }

  public static Date addDays(Date date, int days) {
    Calendar cal = Calendar.getInstance();
    cal.setTime(date);
    cal.add(Calendar.DAY_OF_YEAR, days);
    return cal.getTime();
  }
}
