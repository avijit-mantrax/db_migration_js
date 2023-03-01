const { v4 } = require("uuid");
const { User } = require("../../models/user");


const createUser = async ({firstName, lastName, email, password}) => {
    try {
        const id = v4()
        return  await  User.create({id,firstName, lastName, email, password});
    } catch (error) {
        return error;
    }
};

const readUserByEmail = async ({email}) => {
    try {
        let response =  await  User.findOne({where: {email: email}});
        if (response=== null || {} ||undefined) {
            throw new Error("cread are not matching..")
        } else {
            return response;
        }
    } catch (error) {
        return error;
    }
};

module.exports = {createUser, readUserByEmail}