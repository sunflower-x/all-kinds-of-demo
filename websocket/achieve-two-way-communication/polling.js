import express from 'express'
import cors from 'cors'

const app =express()

app.use(cors())
app.get('/clock',function(req,res){
    res.send(new Date().toLocaleString())
})


app.listen(3000,function(){
    console.log('server start 3000');
})