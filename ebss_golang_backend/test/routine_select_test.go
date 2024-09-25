package test

import (
	"fmt"
	"testing"
	"time"
)

func TestT3(t *testing.T) {
	c1 := make(chan string, 1)
	go func() {
		time.Sleep(time.Second * 2)
		c1 <- "result 1"
	}()
	select {
	case res := <-c1:
		fmt.Println(res)
	case <-time.After(time.Second * 1):
		fmt.Println("timeout 1")
	}
}

func TestT2(t *testing.T) {
	c1 := make(chan string, 1) //定义两个有缓冲通道，容量分别为1
	c2 := make(chan string, 1)

	go func() { //定义一个协程
		time.Sleep(time.Second * 1) //隔1秒发送数据
		c1 <- "name: xuchao"        //向c1通道发送数据
	}()

	go func() {
		time.Sleep(time.Second * 6) //隔6秒发送数据
		c2 <- "age: 25"             //向c2通道发送数据
	}()

	for i := 0; i < 2; i++ { //使用select来获取这两个通道的值，然后输出
		tm := time.NewTimer(time.Second * 5) //给通道创建容忍时间，如果5s内无法读写，就即刻返回
		select {
		case msg1 := <-c1: //接收c1通道数据（消费数据）
			fmt.Println(msg1)
		case msg2 := <-c2: //接收c2通道数据（消费数据）
			fmt.Println(msg2)
		case <-tm.C:
			fmt.Println("send data timeout!")
		}
	}
}
func TestT1(t *testing.T) {
	c1 := make(chan string, 1) //定义两个有缓冲通道，容量为1
	c2 := make(chan string, 1)

	go func() {
		time.Sleep(time.Second * 1) //每隔1秒发送数据
		c1 <- "name: xuchao"
	}()

	go func() {
		time.Sleep(time.Second * 2) //每隔2秒发送数据
		c2 <- "age: 25"
	}()

	for i := 0; i < 2; i++ { //使用select来等待这两个通道的值，然后输出
		select {
		case msg1 := <-c1:
			fmt.Println(msg1)
		case msg2 := <-c2:
			fmt.Println(msg2)
		}
	}
}
