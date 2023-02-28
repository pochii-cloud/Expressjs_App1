const express= require('express');
const app=express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.use(logger)
app.use(express.static('public'))

app.get('/jay',(req,res)=>{
    app.use(logger)
    res.send('hello jay this is your query')
})
app.get('/jay/:id',(req,res)=>{
    const id=req.params.id
    res.json({message:`id passed is ${id}`})
    
})


const UserRouter=require('./routes/users')

app.use('/testrouter',UserRouter)

function logger(req,res,next){
    console.log('logger run')
    next()
}
app.listen(9000,()=>{
    console.log('server running...')
});