const express=require('express')
const router=express.Router()



router.get('/router1',(req,res)=>{
    res.send('router 1')
})


router.route(':/id').get((req,res)=>{
    id=request.params.id
    res.send(`added user with id ${id}`)
}).put((req,res)=>{
    id=request.params.id
}).delete((req,res)=>{
    id=request.params.id
})
module.exports = router