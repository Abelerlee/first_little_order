//console.log("hello node");
var http = require('http');
var Outcall = require('../module/out_call.js');

http.createServer(function (request,response) {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        //fun1(response);
        Outcall.out1(response);
        Outcall.out2(response);
        response.end('jj');//不写则没有http协议尾,但写了会产生两次访问
    }
}).listen(8000);

console.log('Server  running  at  http://127.0.0.1:8000/');

function fun1(res){
    console.log('hello,begin');
    res.write('hello,我是调用函数');
}