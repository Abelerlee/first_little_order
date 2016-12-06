var optfile = require('../module/optfile');

module.exports = {
    login: function(req, res) {
        function recall(data) {
            res.write(data);
            res.end('ooooooooK');
        }
        optfile.readfile('../view/view.html', recall);
    },
    regiser: function(req, res) {
        function recall(data) {
            res.write(data);
            res.end('ooooooooK');
        }
        optfile.readfile('../view/view1.html', recall);
    }
}