#!/bin/bash

# Create main directory
mkdir -p src/static/dist/js
mkdir -p src/static/dist/img
mkdir -p bin

# Create files
touch src/index.html
touch src/example.html
touch src/static/dist/js/app.js
touch src/static/package.json
touch bin/install.sh

echo "Project structure created successfully!"
