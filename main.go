package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"
	"strings"
)

//go:embed frontend/dist/*
var embededFiles embed.FS

func main() {

	// Create a sub filesystem
	subFS, _ := fs.Sub(embededFiles, "frontend/dist")

	// Create a file server
	fs := http.FileServer(http.FS(subFS))

	// Define a handler that uses the file server to serve static files
	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Trim the leading slash
		path := strings.TrimPrefix(r.URL.Path, "/")
		// Check if the file exists in the embedded files
		if _, err := subFS.Open(path); err != nil {
			// If the file doesn't exist, rewrite the path to index.html
			r.URL.Path = "/"
		}
		// Use the file server to serve the static files
		fs.ServeHTTP(w, r)

	})

	fmt.Println("Please visit http://localhost:3000")
	// Start the server
	http.ListenAndServe(":3000", handler)

}
