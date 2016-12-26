/* 
* @Author: Marte
* @Date:   2016-12-23 10:23:51
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-23 15:37:44
*/
var globel = {
    fz_getNetData: function (url, type, dataType, dataParameters, success, error) {
        $.ajax({
                url: url, //请求地址
                type: type,  //请求类型GET/POST
                dataType: dataType,  //数据类型
                data: dataParameters, //请求参数
                async: false, //同步
                success: function(data) {
                            console.log("success");
                        },
                error: function() {
                            console.log("error");
                        }
        });
    },
}

