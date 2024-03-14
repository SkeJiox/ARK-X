const mongoose = require('mongoose');

//Connect to mongodb 
mongoose.connect('mongodb://localhost/test');

mongoose.connection.once('open',function(){
    console.log('connection succed, lets make history..');
}).on('error',function(error){
    console.log('connection errot omagah',error);
});

