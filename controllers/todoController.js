//Uncomment below line if not using DB
//var data=[{item: 'Buy Milk'},{item: 'Buy Fruits'},{item: 'Finish Assignment'}];
var data=[];
var bodyparser=require('body-parser');
var mongoose=require('mongoose');

/*
//Connect to the database
//mongoose.connect('mongodb+srv://test:test@cluster0-vkmoj.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect('mongodb://sarthak:<insertYourPassword>@docdb-2019-09-23-07-02-06.cluster-cy3p0tyba1ct.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0',{useNewUrlParser: true, useUnifiedTopology: true});
var todoSchema=new mongoose.Schema({
  item: String
});

var ToDo=mongoose.model('ToDo',todoSchema);
*/

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
  res.render('todo',{todos: data});

  //If want to find a particular item. Give in the empty {} here like {item:'buy flowers'}
/*
  ToDo.find({},function(err,data){
    if(err) throw err;
    res.render('todo',{todos: data});
  });
*/
});


app.post('/todo',urlencoded,function(req,res){


    data.push(req.body);
    res.json(data);


/*
  var addNew=ToDo(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
  });
*/
});



app.delete('/todo/:item',function(req,res){


  data=data.filter(function(each){
    return each.item.replace(/ /g,'-')!==req.params.item;
    });
    res.json(data);

/*
    ToDo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
      if(err) throw err;
      res.json(data);
    });
*/
});

};
