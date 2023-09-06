const app=require('./app')

const http=require('http')
const server=http.createServer(app)

server.listen('8080',()=>{
  console.log('8080 is listened');
})