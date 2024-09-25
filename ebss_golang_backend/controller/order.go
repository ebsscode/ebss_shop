package controller

import (
	"github.com/gin-gonic/gin"
	response "golte_tcp/vo"
)

type OrderController struct{}

func (b *OrderController) PreMakeOrder(c *gin.Context) {

	response.OkWithMessage("生成成功", c)
}
