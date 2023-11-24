import { ObjectId } from "mongodb";
import mongoose from "mongoose"; 

//use to connect to mongodb
// model for users
const { Schema } = mongoose;

let FuelSchema = new Schema({
  userId: ObjectId,
  gallons: {type: Number, default: null},
  delivery_address: {type: String, default: null},
  delivery_date: {type: Date, default: null},
  suggested_price: {type: Number, default: null},
  total_amount_due: {type: Number, default: null}
});


FuelSchema.statics = {
  findId (id) {
    return this.find(id)
  },
  createNew(item) {
    return this.create(item);
  },
  findUserById(id) {
    return this.findById(id).exec();
  }
    
}
FuelSchema.methods = {
  
}


module.exports = mongoose.model ("fuel",FuelSchema)
