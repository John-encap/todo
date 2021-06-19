 var bodyparser=require('body-parser');
 
 
 var data = [{item: 'get milk'},{item: 'study'},{item: 'coding'}];
 var urlencodedparser = bodyparser.urlencoded({extended: false});
 
 module.exports = function(app){

   app.get('/todo', function(req, res){
     res.render('todo',{todos: data});

   } );


   app.post('/todo', urlencodedparser, function(req, res){

    data.push(req.body);
    res.json(data);

   });


   app.delete('/todo/:item', function(req, res){

   data = data.filter(function(todo)
   {
     return todo.item.replace(/ /g, '-')!== req.params.item;
   });
   res.render('todo',{todos: data});

   });

 }