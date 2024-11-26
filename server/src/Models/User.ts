import mongoose, {Model, Schema, Document} from "mongoose"

interface user extends Document{
  username: string,
  email: string,
  password: string,
}

const user: Schema = new mongoose.Schema({
  username: {type: String},
  email: {type: String},
  password: {type: String}
})

const userModel: Model<user> = mongoose.model<user>("userModel", user);

export default userModel;
