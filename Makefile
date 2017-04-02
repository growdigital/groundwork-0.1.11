
build: node_modules
	node index.js
	fractal build

node_modules: package.json
	npm install

.PHONY: build
