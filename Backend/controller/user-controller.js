import User from "../schema/user-schema.js"; //Here,i Import UserSchema as User

const addUser =async(req, res) => {
  const user = req.body;
  //created object of our Schema
  const newUser = new User(user); //sending to our schema for the purpose of validation

  try {
     await newUser.save();
     res.status(201).json(newUser);
  } catch (error) {
     res.status(409).json({message:error.message});
  }
};
export default addUser;






/****************************NOTES*************************************************** */
/*
    1.body ka data hamare user mai tha aur avv humne isko apne schema mai send kiya for the
    purpose of validation

    2. 




    */
