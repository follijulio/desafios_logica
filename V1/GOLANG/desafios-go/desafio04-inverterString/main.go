package main

import (
	"fmt"
)

func inverter(palavra string) string {

	runas := []rune(palavra)

	for i, j := 0, len(runas)-1; i < j; i, j = i+1, j-1 {
		runas[i], runas[j] = runas[j], runas[i]
	}
	return string(runas)
}

func main() {
	fmt.Print("", inverter("golang"))
}
