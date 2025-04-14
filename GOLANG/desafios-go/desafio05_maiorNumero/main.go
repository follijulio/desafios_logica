package main

import "fmt"

func main() {

	fmt.Print("", maiorNumero([]int{3, 10, 2}))

}

func maiorNumero(array []int) int {
	var maior = 0

	for i := 0; i < len(array); i++ {
		if maior < array[i] {
			maior = array[i]
		}
	}
	return maior

}
