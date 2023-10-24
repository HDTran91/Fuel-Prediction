import {transSuccess } from "../../lang/Eng";
import { profileSer } from "../Services";
import { validationResult } from "express-validator";

let getProfile = (req,res) => {
    return res.render("auth/profile",{
        user : req.user,
    });
}

let updateInfo = async (req, res) =>{
    let errorArr = [];
    
    let validationErrors = (validationResult(req));
    if(!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
       errors.forEach(item => {
        errorArr.push(item.msg);
       });
       return res.status(500).send(errorArr)
    }
    try {
        let updateUserItem = req.body;
        await profileSer.updateProfile(req.user._id, updateUserItem);

        let result ={
            message: transSuccess.user_info_updated
        };
        return res.status(200).send(result)
    } catch(error) {
        console.log(error)
        return res.status(500).send(error)
    }

}
module.exports = {
    getProfile: getProfile,
    updateInfo: updateInfo
};