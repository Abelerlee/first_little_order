var http = require('http');
var url = require('url');
var router = require('../n04/router');

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    if (reZX C`quest.url !== '/favicon.ico') {
        //optfile.readfileSync('../view/view.html');
        var pathname = url.parse(request.url).pathname;
        console.log(pathname);
        pathname = pathname.replace(/\//, ''); //替换掉前面的/
        router[pathname](request, response);
        // function recall(data) {
        //     response.write(data);
        //     response.end('ooooooK');
        // }
        // optfile.readfile('../view/view.html', recall);
        // console.log('主程序执行完毕');
    }
}).listen(8000);
console.log('Serve running at http://127.0.0.1:8000');