const usersModel = require('./usersModel.js');
const config = require('./config');



module.exports = {

    getAllUsers: function(req, res, next){
        return res.status(200).json(usersModel.users);
    },

    getUserByName: function(req, res, next){
        let name = req.params.name;
        for (var i in usersModel.users){
            if (usersModel.users[i] == name){
                return res.status(200).json({User: usersModel.users[i]});
            }
        }
    },

    getSecrets: function(req, res, next){
       if (req.session.admin){
           res.status(200).json(config.secret);
       }else{
           res.status(403).send('unauthorized');
       }
    },

    addUser: function(req, res, next){
        if (req.body.newUser){
        let newUser = req.body.newUser;
        usersModel.users.push(newUser);
        return res.status(200).json(usersModel.users);
        }else{
            return res.status(400).send('Need "newUser" value filled in');
        }
    },

    login: function(req, res, next){
        if (req.body.name == 'claytons username' 
        && req.body.password == 'claytons password'){
            req.session.admin = true;
            return res.status(200).send('authorized login');
        }else{
            req.session.admin = false;
            return res.status(403).send('unauthorized');
        }
        
    },

    deleteUserByName: function(req, res, next){
        let user = req.params.name;
        for (var i = 0; i < usersModel.users.length; i ++){
            if (usersModel.users[i] == user){
                usersModel.users.splice(i--, 1);
            }
        }
        return res.status(200).json(usersModel.users);
    },

}