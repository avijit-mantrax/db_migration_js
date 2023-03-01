const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { APP_SECRET_KEY } = require('../../config');
const { createUser, readUserByEmail } = require('../curd/user');

const secret = APP_SECRET_KEY

const signup = async (req, res) => {
    const requestData = req.body;
    const firstName = requestData.firstName;
    const lastName = requestData.lastName;
    const email = requestData.email;
    const password = requestData.password;
    const salt = await bcrypt.genSalt()
    const saltPassword = await bcrypt.hash(password, salt, (err, salt) => {
        if(!err){
            console.log(salt);
            return salt;
        }
    })
    try {
       const response = await createUser({firstName, lastName, email, password:saltPassword});
       return res.status(201).json(response)
    } catch (error) {
        return res.status(400).json({error: error});
    }
};

const login = async (req, res) => {
    const requestData = req.body;
    const email = requestData.email;
    const password = requestData.password;
    const response = await readUserByEmail({email});
    const passwordStatus = await bcrypt.compare(password, response.password, (err, salt) => {
        if(!err){
            console.log(salt);
            return salt;
        }
    })
    if (passwordStatus) {
        try {
            const token = await jwt.sign(response.firstName, response.id, { algorithm: 'RS256' })
             res.cookie("unid", token, {expires:"2d", httpOnly: true, maxAge: 3000*3600});
             return res.send("succesfully logged in..")
         } catch (error) {
             return res.status(400).json({error: error});
         }
    } else {
        return res.status(400).json({error: "please check the creds.."});
    }
};

module.exports = { login, signup }