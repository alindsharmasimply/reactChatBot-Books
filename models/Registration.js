import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
  registerDate: String,
});

const registration = mongoose.model("registration", registrationSchema);

export default registration;
