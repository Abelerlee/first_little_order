var fs = require('fs');
module.exports = {
    readfileSync: function(path) { //同步读取
        var data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");
        // return data;
    },
    readfile: function(path, reacll) { //异步执行
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.toString());
                reacll(data);
            }
        });
        console.log("异步方法执行完毕");
    }
}