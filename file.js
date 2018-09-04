var fs = require("fs");
var buf = new Buffer.alloc(1024);

console.log("ready to open file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("file opened");
   console.log("ready to read file");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  bytes by read");
      
             if(bytes > 0){
                      console.log(buf.slice(0, bytes).toString());
                            }

fs.close(fd,function(err){
  if(err){
    console.log(err);
  }
  console.log("file closed");
});
                               });
                               });
