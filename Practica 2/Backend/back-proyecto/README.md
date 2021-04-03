# Backend Node JS
Backend desarrollado con NodeJs y Mongo DB.


## Modo Desarrollo
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "html": "copyfiles --up 1 src/public/*.html dist",
    "css": "copyfiles --up 1 src/public/*.css dist",
    "build": "tsc && npm run html && npm run css",
    "dev": "nodemon dist/index"
}
## Modo Producción
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "html": "copyfiles --up 1 src/public/*.html dist",
    "start": "node dist/index.js"
}