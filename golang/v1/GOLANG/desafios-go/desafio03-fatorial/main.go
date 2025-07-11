package main

import "fmt"

func main() {
	fmt.Print("", fatorial(0))
}

func fatorial(numero int) int {
	if numero == 0 {
		return 1
	}
	for i := numero - 1; i > 1; i-- {
		numero *= i
	}
	return numero
}
