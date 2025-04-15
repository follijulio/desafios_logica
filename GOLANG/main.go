package main

import (
	"strconv"

	"github.com/gin-gonic/gin"
)

func main() {

	server := gin.Default()

	server.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"Olá": "Mundo",
		})
	})

	//! SOMA
	server.GET("/soma", func(c *gin.Context) {
		xStr := c.Query("x")
		yStr := c.Query("y")

		x, err1 := strconv.Atoi(xStr)
		y, err2 := strconv.Atoi(yStr)

		if err1 != nil || err2 != nil {
			c.JSON(400, gin.H{
				"erro": "Parâmetros inválidos",
			})
			return
		}

		resultado := x + y

		c.JSON(200, gin.H{
			"resultado": resultado,
		})

	})

	//! MULTIPLICACAO
	server.GET("mult", func(c *gin.Context) {
		xStr := c.Query("x")
		yStr := c.Query("y")

		x, err1 := strconv.Atoi(xStr)
		y, err2 := strconv.Atoi(yStr)

		if err1 != nil || err2 != nil {
			c.JSON(400, gin.H{"erro": "Parâmetros inválidos"})
			return
		}

		resultado := x * y

		c.JSON(200, gin.H{
			"resultado": resultado,
		})

	})

	server.GET("sub", func(c *gin.Context) {
		xStr := c.Query("x")
		yStr := c.Query("y")

		x, err1 := strconv.Atoi(xStr)
		y, err2 := strconv.Atoi(yStr)

		if err1 != nil || err2 != nil {
			c.JSON(400, gin.H{"erro": "Parâmetros inválidos"})
			return
		}

		resultado := x - y

		c.JSON(200, gin.H{
			"resultado": resultado,
		})

	})

	server.GET("div", func(c *gin.Context) {
		xStr := c.Query("x")
		yStr := c.Query("y")

		x, err1 := strconv.Atoi(xStr)
		y, err2 := strconv.Atoi(yStr)

		if err1 != nil || err2 != nil {
			c.JSON(400, gin.H{"erro": "Parâmetros inválidos"})
			return
		}

		resultado := x / y

		c.JSON(200, gin.H{
			"resultado": resultado,
		})

	})

	server.Run(":8080")
}
