import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});

autoIncrement.initialize(mongoose.connection); // initializing and connecting to mongoose
userSchema.plugin(autoIncrement.plugin, "user"); //use user as a plugin

const user = mongoose.model("user", "userSchema");
// model() method of mongoose takes two argv ,first one is collection name of database ,if in your database the collection of given
//first argv is existed then mongoose does not create collection otherwise i will create collection
//second argv is the  our schema

export default user;




/**************************************************NOTES***************************************************/

/*Hum logo ne user se koi id(index) kuch nhi liya ye hum automatically mongoose ke package kii help se karenge jiska name hai
 * mongoose auto increment
 *
 * Ye 2 lines of auto increment is enough
 *
 *
 */
