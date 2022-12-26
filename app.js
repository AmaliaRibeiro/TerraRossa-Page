const express = require('express');
const path = require('path'); //con este modulo se unifican las rutas para identificarlas mejor
const app = express();

app.use(express.static('public')); //se tiene la carpeta public como recurso estático para poder consumirlo

app.listen(3030, ()=>{
    console.log('Servidor activo en el puerto 3030');
})

// Determinacion de ejs como view engine
/*app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));*/

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get('/catalogue', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/catalogue.html'));
})

app.get('/allBlogs', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/allBlogs.html'));
})