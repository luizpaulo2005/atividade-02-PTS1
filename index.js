const express = require ('express');
const app = express ()
const port = 4001;

app.use(express.static('public'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.get('/' , (req,res)=>{
res.render('index.ejs')
})

app.get('/noticias' , (req,res)=>{
res.render('noticias/index.ejs')
})

app.get('/noticias/01' , (req,res)=>{
res.render('noticias/01/index.ejs')
})


app.listen(port , () =>{
console.log ("Servidor Executado na porta: " + port)
})