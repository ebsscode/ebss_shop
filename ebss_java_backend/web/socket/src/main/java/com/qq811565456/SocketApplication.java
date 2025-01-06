package com.qq811565456;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.qq811565456.mapper")
@SpringBootApplication
public class SocketApplication {
    public static void main(String[] args) {
        SpringApplication.run(SocketApplication.class, args);
    }
}
