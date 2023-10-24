import UserModel from "./../models/userModel";

let updateProfile = (id,item) => {
    return UserModel.updateUser(id,item);
};



module.exports ={
    updateProfile: updateProfile,
}