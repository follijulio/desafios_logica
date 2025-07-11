package main

import "fmt"

func ehPar(numero int) bool {
	return numero%2 == 0
}

func main() {
	fmt.Print("", ehPar(2))
}
