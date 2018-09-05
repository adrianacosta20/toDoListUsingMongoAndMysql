module.exports = function(){
    var mongoose = require('mongoose');
    var mongo = mongoose.connect('mongodb://aacosta.techlaunch.io/address_book',{ useNewUrlParser: true });
    return mongo;
}
