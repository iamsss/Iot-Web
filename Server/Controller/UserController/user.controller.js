const {app} = require('../../server');

const {authenticate} = require('../../middleware/authenticate');

app.post('/users',(req,res) => {
    var body = _.pick(req.body,['email','password']);
    var user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(404).send(e);
    });
 });


 app.get('/users/me',authenticate,(req,res) => {
    if(req.user) {

        res.send(req.user)
    }else {
        res.status(404).send('User Not Found');
    }
 });


 app.post('/users/login',(req,res) => {
    var body = _.pick(req.body,['email','password']);
    User.findByCredentials(body.email,body.password)
        .then((user) => {
                user.generateAuthToken().then((token) => {
                    res.header('x-auth',token).send(user);
                });
        }).catch((e) => {
            res.status(400).send();
        });
    
 })

 app.delete('/users/me/token', authenticate,(req,res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send('Token Deleted');
    }, () => {
        res.status(400).send();
    });
 });
