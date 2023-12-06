// import bcrypt from 'bcrypt';
import db from "../models/index"
// const salt = bcrypt.genSaltSync(10);


let createNewUser =async (data) => {
    // let hashPasswordFromBcrypt = await hashUserPassword(data,password);
    await db.User.create({
        email: data.email,
        password: data.password,
        firstName:data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender :data.gender ==='1'? true:false,  
        phoneNumber: data.phoneNumber,
        roleId:data.roleId,
    })
    resolve(' create a new user success')
    console.log('data from service')
    console.log(data)
    // console.log(hashPasswordFromBcrypt)
}
// let hashUserPassword = () =>{
//     return new Promise(async (resovle, reject) => {
//         try {
//             var hash = bcrypt.hashSync(password, salt);
//             resovle(hashPassword)
//         } catch (e) {
//             reject(e)
            
//         }

//     })
// }

module.exports = {
    createNewUser:createNewUser,
}