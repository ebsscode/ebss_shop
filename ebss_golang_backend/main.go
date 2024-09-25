package main

import (
	"golte_tcp/config"
	"golte_tcp/service"
	"log"
)

func main2() {
	service.InitializeConfig()

	// 初始化数据库
	config.AppGlobal.DB = service.InitMySqlGorm()

	//config.AppGlobal.DB.Create(&model.Test{Name: "D42", AddTime: 100})

	router := service.InitRouter()

	err := router.Run(":" + config.AppGlobal.Config.App.Port)
	if err != nil {
		log.Panicln("服务器启动失败：", err.Error())
	}
}
