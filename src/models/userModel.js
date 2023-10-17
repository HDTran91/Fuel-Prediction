import mongoose from "mongoose"; 
import bcrypt from "bcrypt"


//use to connect to mongodb
// model for users
const { Schema } = mongoose;

let UserSchema = new Schema({
  username: String,
  password: String,
  gender: {type: String, default: "male"},
  phone: {type: Number, default: null},
  address: {type: String, default: null},
  createAt: {type: Number, default: Date.now},
  updateAt: {type: Number, default: Date.now},
  deleteAt: {type: Number, default: Date.now}
},{
  capped: { size: 1024 },
  bufferCommands: false,
  autoCreate: false
});


// function create new use in mongoose
UserSchema.statics = {
  // function create new use in mongoose
    createNew(item) {
        return this.create(item);
    },
    findByUsername(username) {
      return this.findOne({"username": username}).exec();
    },
    findUserById(id) {
      return this.findById(id).exec();
    }
}
UserSchema.methods = {
  comparePassword(password){
    return bcrypt.compare(password,this.password)
  }
}

module.exports = mongoose.model ("user",UserSchema);
