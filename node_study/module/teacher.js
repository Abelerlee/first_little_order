   var user = require('./modulecall');

    function Teacher(id, name,age){
            user.apply(this,[id,name,age]);
            this.teach = function(res){
                res.write(this.name+'讲课有一套');
            }
        }

    module.exports = Teacher;