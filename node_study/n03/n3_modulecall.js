//console.log("hello node");
// var http = require('http');
//
// http.createServer(function (request,response) {
//     response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
//     if(request.url!=="/favicon.ico"){  //清除第2此访问
//         response.end('jj');//不写则没有http协议尾,但写了会产生两次访问
//     }
// }).listen(8000);
//
// console.log('Server  running  at  http://127.0.0.1:8000/');


var http = require('http');
// var user = require('../module/modulecall');
var Teacher = require('../module/teacher');

 http.createServer(function(request,response){
     response.writeHead(200,{'Content-type':'text/html;charset = utf-8'});
     if(request.url!=='/favicon.ico'){//清楚第二次访问
         teacher = new Teacher(8,'gungun',20);
         teacher.enter();
         teacher.teach(response);
         response.end('11');//不写就没有http协议尾，但写了会产生两次访问
     }
 }).listen(8000);

 console.log('Server  running  at http://127.0.0.1:8000/');