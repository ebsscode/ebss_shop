package test

import (
	"fmt"
	"testing"
)

func TestChan(t *testing.T) {
	arr := []int{7, 2, 8, -9, 4, 0}
	indexVar := make(chan int, 10)
	valueVar := make(chan int, 10)

	for index, value := range arr {
		valueVar <- value
		indexVar <- index
	}
	x := <-valueVar
	y := <-valueVar
	z := <-indexVar
	fmt.Println(x, y, z)
}
