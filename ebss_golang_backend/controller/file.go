package controller

import (
	"github.com/gin-gonic/gin"
	response "golte_tcp/vo"
	"os"
)

type FileApi struct{}

func (b *FileApi) ClearUpload(c *gin.Context) {
	uploadPath := "/www/wwwroot/aics-h5.golteai.com/public/upload"

	os.RemoveAll(uploadPath)

	response.OkWithMessage("删除成功", c)
}
