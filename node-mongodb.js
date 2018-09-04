const MongoClient=require('mongodb');
const url='mongodb://localhost:28017';

MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
  if(err) throw err;
  var dbo=db.db("test1");
  dbo.collection('test01').find({}).toArray(function(err,result){
    if(err) throw err;
    console.log(result);
    db.close();
  });
});

