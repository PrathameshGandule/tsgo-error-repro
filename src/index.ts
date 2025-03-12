import { Schema , Document } from "mongoose";
interface IUser extends Document {
  name: String
}
const userSchema = new Schema<IUser>({
  name: { type: Number, required: true }
});