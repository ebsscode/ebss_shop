package controller

import (
	"github.com/gin-gonic/gin"
	response "golte_tcp/vo"
)

type TestApi struct{}

func (b *TestApi) Create(c *gin.Context) {
	response.OkWithMessage("创建成功", c)
}
