const {app} = require('../../server');
const _ = require('lodash');
const { Bulb } = require('../../models/bulb');

app.post('/bulbs',(req,res) => {
    var body = _.pick(req.body,['name','status']);
    var bulb = new Bulb(body);
    bulb.save().then((obj) => {
        res.send(obj);
    }).catch((e) => {
        res.status(404).send(e);
    });
 });

 app.put('/bulbs',(req,res) => {
    var body = _.pick(req.body,['name','status']);
    Bulb.findOneAndUpdate({name: body.name}, 
    { $set: {
        status: body.status
        }
    },
    {
        returnOriginal: false
    }
    
    ).then((result) => {
        res.send("Sucess");
    }).catch((e) => {
        res.status(404).send(e);
    });
 });


 app.get('/bulbs/status',(req,res) => {
        Bulb.find({name:"b1"}).then((obj) => {
            res.send(obj[0].status);
 }).catch((e) => {
    res.status(404).send(e);
});
});