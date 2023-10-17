import { validationResult } from "express-validator";
import { authSer } from "./../Services/index";


let getLoginRegister =  (req,res) => {
    return res.render("auth/loginRegister/loginRegister",{
        errors: req.flash("error"),
        success: req.flash("success")
    });
}

//update user to database (assigment 4)
let postRegister = async (req,res) => {
    let errorArr= [];
    let successArr = [];
    // console.log(validationResult(req));
    // console.log(validationResult(req).isEmpty()); 
    // console.log("-------------------------");
    // console.log(validationResult(req).mapped());
    
    // if there are error, show up error
    if(!validationResult(req).isEmpty()) {
        let errors = Object.values(validationResult(req).mapped());
        errors.forEach(item => {
            //push errors into array
            errorArr.push(item.msg)
        })
        req.flash("error", errorArr)
        // console.log(errors)
        // console.log("Error:", errorArr)
        return res.redirect("/loginRegister")
    } 
    try {
        //successfully create a new user
        let createUserSuccess = await authSer.register(req.body.username,req.body.password) ;
        successArr.push(createUserSuccess);
        req.flash("success", successArr)
        return res.redirect("/loginRegister");
    } catch(error) {
        // fail to create a new user
        errorArr.push(error)
        req.flash("error", errorArr)
        return res.redirect("/loginRegister");
    }
    
    
}
    
module.exports = {
    getLoginRegister: getLoginRegister,
    postRegister: postRegister
}