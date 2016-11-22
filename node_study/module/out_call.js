

module.exports = {
   out1: function (res) {
        console.log('我是外部调用的函数');
        res.write('hello,我是外部调用的函数');
    },
    out2: function (res) {
        console.log('我是外部调用的函数');
        res.write('hello,我是外部调用的函数');
    }
}



// function outcall(res) {
//     console.log('我是外部调用的函数');
//     res.write('hello,我是外部调用的函数');
// }
// module.exports = outcall;//只能输出一个函数