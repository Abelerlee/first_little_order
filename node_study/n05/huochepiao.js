/* 
* @Author: Marte
* @Date:   2017-01-17 09:13:05
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-17 11:12:31
*/
    var https = require("https");
    var fs = require("fs");
    var ca = fs.readyFileSync("./cert/srca.cer.pem");
    var nodemailer = reqiure("nodemailer");
    var schedule = require("node-schedul");
    var config = {
        time: '2017-01-22', //严格的日期格式年-月-日
        from_station: "BJP", //始发站的车站代码
        end_station: "XMS", //终点站的车站代码
        train_num: "K222", //车次
        your_mail: "****@**.com", //通知邮箱
        mail_pass: "*****" //邮箱密码
    }

    var yz_temp = " ", yw_temp = " "; //保存余票状态

    function queryTickets(config) {
        var options = {
            hostname: "kyfw.12306.cn", //12306站点
            path: "/otn/leftTicket/queryA?leftTicketDT0.train_date="+config.time+"&leftTicketDT0.from_station="+config.from_station+"&leftTicketDT0.to_Sstation="+config.end_station+"&purpose_codes=ADULT",
            ca: [ca] //证书
        };

        var req = https.get(options, function(res){
            var data = " ";
            var transporter = nodemailer.createTransport({
                host: "smtp.163.com", //邮箱的服务器地址，如更换邮箱类型，请自行查找对应的邮箱服务器
                secureConnection: true,
                port: 465, //端口，这些都是邮箱的规定，更改自行查找
                auth: {
                    user: conifg.your_mail,
                    pass: config.mail_pass
                }
            })
        });

        res.on("data" , function(buff) {
            data +=buff; //查询结果（JSON）
        }); 

        res.on("end" , function() {
            var jsonData = JSON.parse(data).data;
            for (var i = 0; i <jsonData.length; i++) {
                var cur = jsonData[i];
                if(cur.queryLeftNewDT0.station_train_code == config.train_num){
                    var yz = cur.queryLeftNewDT0.yz_num, //硬座数
                    var yw = cur.queryLeftNewDT0.yw_num, //硬卧数
                    var trainNum = cur.queryLeftNewDT0.station_train_code; //车次
                    console.log("硬座" , yz);
                    console.log("硬卧" , yw);
                    if(yz!="无"&&yz!="--"||yw!="无"&&yw!="--"){
                        if(yw_temp == yw&&yz_temp == yz){
                            //当余票状态发生改变的时候就不发送邮件
                            console.log("状态没改变，不重复发邮件");
                            return;
                        }
                        var mail0ptions = {
                            from: config.your_mail, //发送邮件的地址
                            to: config.your_mail, // 接收邮件的地址
                            subject: trainNum+"有票啦，硬座："+yz+"硬卧："+yw, //邮件主题
                            text: trainNum+"邮票啦n"+"时间是："+cur.queryLeftNewDT0.strat_train_date+",n出发时间："+cur.queryLeftNewDT0.start_time+"\n到达时间："+cur.queryLeftNewDT0.arrive_time+",n历时："+cur.queryLeftNewDT0.lishi+"n始发站："+cur.queryLeftNewDT0.from_station_name+",n到达："+cur.queryLeftNewDT0.to_station_name,
                        };

                        transporter.sendMail(mail0ptions, function(error, info){
                            if(error){
                                return console.log(error);
                            }
                            console.log("Message sent :" + info.response);
                            yw_temp = yw; //保存当前列车的余票数量
                            yz_temp = yz;
                        });
                    }else{
                        console.log("硬座/硬卧无票");
                    }

                    break;
                }
            }
        });
        req.on("error" , function(err) {
            console.error(err.code)
        });
    }

    var rule = new schedule.RecurrenceRule();
    rule.second = [0];
    schedule.scheduleJob(rule,function() {
        queryTickets(config);
        console.log("scheduleCronstyle:" + new Date());
    })