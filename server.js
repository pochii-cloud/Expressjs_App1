const express= require('express');
const app=express();

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/jay/:id',(req,res)=>{
    const id=req.params.id
    res.json({message:`id passed is ${id}`})
    
})

app.get('/jay',(req,res)=>{
    const id=req.query.id
    res.send('hello jay this is your query',+id)
})
app.listen(9000,()=>{
    console.log('server running...')
});