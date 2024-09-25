package com.qq811565456;

import com.baomidou.mybatisplus.generator.FastAutoGenerator;
import com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;
import java.nio.file.Paths;

public class CodeGeneratorTemplate {
    private static String url = "";
    private static String username = "";
    private static String password = "";
    private static String db = "";

    public static void main(String[] args) {
        code();
    }
    public static void code(){
        FastAutoGenerator.create("jdbc:mysql://"+url+"/"+db+"?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false", username, password)
                .globalConfig(builder -> builder
                        .author("qq811565456")
                        .outputDir(Paths.get(System.getProperty("user.dir")) + "/dao/generator")
                        .commentDate("yyyy-MM-dd")
                )
                .packageConfig(builder -> builder
                        .parent("com.qq811565456")
                        .entity("model")
                        .mapper("mapper")
                        .service("service")
                        .serviceImpl("service.impl")
                        .xml("mapper.xml")
                )
                .strategyConfig(builder -> builder
                        .entityBuilder()
                        .enableLombok()
                        .enableFileOverride()
                        .serviceBuilder()
                        .enableFileOverride()
                        .controllerBuilder()
                        .enableFileOverride()
                        .enableRestStyle()
                        .mapperBuilder()
                        .enableBaseResultMap()
                        .enableFileOverride()
                )
                .templateEngine(new FreemarkerTemplateEngine())
                .execute();
    }
}
