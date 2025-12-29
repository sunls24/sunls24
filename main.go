package main

import (
	"embed"
	"fmt"
	"log"
	"os"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

const defPort = "3000"

//go:embed web/dist/*
var webFS embed.FS

func main() {
	host := os.Getenv("HOST")
	port := os.Getenv("PORT")
	if len(port) == 0 {
		port = defPort
	}

	e := echo.New()
	e.Use(middleware.Recover())
	e.StaticFS("/", echo.MustSubFS(webFS, "web/dist"))
	log.Fatal(e.Start(fmt.Sprintf("%s:%s", host, port)))
}
