const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

console.log('Secret : ',process.env.JWT_SECRET);

const users = [{
_id: userOneId,
email: 'saurav@gmail.com',
password: 'password',
tokens: [{
    access: 'auth',
    token: jwt.sign({_id:userOneId, access: 'auth'},process.env.JWT_SECRET).toString()
}]
}, {
    _id: userTwoId,
    email: 'saurav21@gmail.com',
    password: 'qwert12345',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id:userTwoId, access: 'auth'},process.env.JWT_SECRET).toString()
    }]
     

}];

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

      return  Promise.all([userOne,userTwo])
    }).then(() => done());
}




module.exports = {
    users,
    populateUsers
};