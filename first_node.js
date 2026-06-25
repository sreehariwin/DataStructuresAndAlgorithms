var http = require('http')

http.createServer(function(req,res){
    if(req.url === '/'){
        res.write('Welcome Sac')
        res.end()
    }else
     if(req.url === '/admin'){
        res.write('admin Home')
        res.end()
    }else{
        res.writeHead(404)
        res.write('error')
        res.end()
    }
   
}).listen(8000,()=>console.log('server started'))

// function server(req,res){
    
// }

///node///

// var read = require('readline-sync'); //npm install readline-sync

// var value = read.question('enter a number');

// console.log(value);


// module.exports.hello = function (){
//     console.log('Test');
// }