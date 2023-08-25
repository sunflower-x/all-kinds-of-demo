// EventEmitter 的核心就是事件触发与事件监听器功能的封装

// demo01
// const EventEmitter=require('events').EventEmitter
// const events=new EventEmitter()
// events.on('some-event',function(){
//     console.log('active some-event');
// })

// setTimeout(function(){
//     events.emit('some-event')
// },1000)


// demo02 on和emit
// const EventEmitter= require('events').EventEmitter
// const events =new EventEmitter()
// events.on('event',function(arg1){
//     console.log(arg1,'active event01');
// })
// events.on('event',function(arg1){
//     console.log(arg1,'active event02');
// })

// events.emit('event','hello')

// demo03 addListener,removeListener,listenerCount
const EventEmitter= require('events').EventEmitter
const events =new EventEmitter()

const listen01=function(){
    console.log('active event01');
}
const listen02=function(){
    console.log('active event02');
}
events.addListener('event',listen01)
events.addListener('event',listen02)

console.log('before remove count '+events.listenerCount('event'));

events.removeListener('event',listen02)

console.log('after remove count '+events.listenerCount('event'));


events.emit('event')