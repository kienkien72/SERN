import db from "../models/index"
import CRUDservice from "../services/CRUDservice";

let getHomePage = async (req,res) => {
try {
    let data = await db.User.findAll();
    return res.render('homepage.ejs',{
        data:JSON.stringify(data)
    })
} catch (e) {
    console.log(e)
}

}
let getCrud = (req,res) =>{
    return res.render ('crud.ejs');
}

let postCrud = async (req,res) =>{
    let message = await CRUDservice.createNewUser(req.body);
    console.log(message)
    return res.send('Bạn đã đăng ký thành c')
}
// object{
//     key:'',
//     value:''
// }

module.exports= {
    getHomePage:getHomePage,
    getCrud:getCrud,
    postCrud:postCrud,
};