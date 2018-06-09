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