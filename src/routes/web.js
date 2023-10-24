import express from "express";
import {auth, fuelPrediction, profile} from "./../controller/index"
import { authValid, profileValid } from "./../validation";
import passport from "passport";
import InitPassportLocal from "../controller/passportController";

InitPassportLocal();

let router = express.Router();

/**
 * Init all routes
 */

let InitRoute =(app) => {
    router.get("/loginRegister", auth.checkLoggedOut, auth.getLoginRegister);
    router.get("/profile", auth.checkLoggedIn, profile.getProfile);
    router.get("/fuelPrediction", fuelPrediction.getFuelPredictionController);

    router.post("/register", auth.checkLoggedOut, authValid.register, auth.postRegister)

    router.post("/login", auth.checkLoggedOut, passport.authenticate("local",{
        successRedirect: "/profile",
        failureRedirect: "/loginRegister",
        successFlash: true,
        failureFlash: true
    }))

    router.put("/updateInfo", 
    auth.checkLoggedIn,
    profileValid.updateInfo ,profile.updateInfo)


    return app.use("/",router)
}
module.exports = InitRoute;