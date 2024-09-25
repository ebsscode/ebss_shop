package router

import (
	"github.com/gin-gonic/gin"
	"golte_tcp/controller"
	"golte_tcp/middleware"
)

func Routers() *gin.Engine {
	router := gin.Default()

	v1 := router.Group("/v1")
	{
		v1.GET("/test", new(controller.TestApi).Create)
	}

	api := router.Group("/api")
	{
		api.GET("file/clearUpload", new(controller.FileApi).ClearUpload)
	}

	router.Use(middleware.Cors()) // 直接放行全部跨域请求
	return router
}
