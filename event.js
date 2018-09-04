var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('myevent',function(){
  console.log('myevent executed.');
});
event.emit('myevent');
