
 
const  mongoose = require('mongoose');

var BlubSchema = new mongoose.Schema( {
    status: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
    
});
var Bulb = mongoose.model('Bulb',BlubSchema);
module.exports = {
    Bulb
};