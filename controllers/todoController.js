//Uncomment below line if not using DB
//var data=[{item: 'Buy Milk'},{item: 'Buy Fruits'},{item: 'Finish Assignment'}];
var data=[];
var bodyparser=require('body-parser');
var mongoose=require('mongoose');
var fs=require('fs');


//Connect to the database

//Using MongoDB on Atlas
mongoose.connect('mongodb+srv://sarthak:sarthakjain@cluster0-0kdbg.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});


//Using DocumentDB which has compatibility for mongoDB
mongoose.connect('mongodb://sarthak:sarthakjain@docdb-2019-09-24-02-39-10.cluster-cy3p0tyba1ct.us-east-1.docdb.amazonaws.com:27017',{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    ssl: true,
    sslValidate: false,
    sslCA: fs.readFileSync('./rds-combined-ca-bundle.pem')})
.then(() => console.log('Connection to DB successful'))
.catch((err) => console.error(err,'Error'));


var todoSchema=new mongoose.Schema({
  item: String
});

var ToDo=mongoose.model('ToDo',todoSchema);


/*
Use below line if you want to by default want to have some items in db before application starts.
*/

/*
var firstItem=ToDo({item:'buy Flowers'}).save(function(err){
  if(err) throw err;
  console.log('Item Saved');
});
*/


//middleware we wanna run for the post requests
var urlencoded=bodyparser.urlencoded({extended:false});
module.exports=function(app){


app.get('/todo',function(req,res){
  //uncomment below line if not using DB
  //res.render('todo',{todos: data});

  //If want to find a particular item. Give in the empty {} here like {item:'buy flowers'}

  ToDo.find({},function(err,data){
    if(err) throw err;
    res.render('todo',{todos: data});
  });

});


app.post('/todo',urlencoded,function(req,res){

/*
    data.push(req.body);
    res.json(data);

*/

  var addNew=ToDo(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
  });

});



app.delete('/todo/:item',function(req,res){

/*
  data=data.filter(function(each){
    return each.item.replace(/ /g,'-')!==req.params.item;
    });
    res.json(data);
*/

    ToDo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
      if(err) throw err;
      res.json(data);
    });

});

};
