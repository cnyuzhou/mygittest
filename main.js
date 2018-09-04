process.stdout.write("hello world!"+"\n");

process.argv.forEach(function(val,index,array){
  console.log(index+": " + val);
});

console.log(process.execPath);

console.log(process.platform);
