const express = require ('express');
const app = express ()
const port = 4001;


app.use(express.static('public'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.get('/' , (req,res)=>{
res.send('Minha primeira página')
})

app.get('/noticias' , (req,res)=>{
res.send('Teste')
})

app.listen(port , () =>{
console.log ("TA PEGANO")
})