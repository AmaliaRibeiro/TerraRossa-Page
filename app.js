const express = require('express');
const path = require('path'); //con este modulo se unifican las rutas para identificarlas mejor
const app = express();

app.use(express.static(path.join(__dirname,'public'))); //se tiene la carpeta public como recurso estático para poder consumirlo

app.listen(3030, ()=>{
    console.log('Servidor activo en el puerto 3030');
})

// Determinacion de ejs como view engine
/*app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));*/

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './index.html'));
})

app.get('/catalogue', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/catalogue.html'));
})

app.get('/allBlogs', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/allBlogs.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/terminos', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/terminos.html'));
})

app.get('/preguntasF', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/preguntasF.html'));
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
})

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
})

// Ruta 404 
app.use((req, res, next)=>{
    res.status(404).render('not-found')
});