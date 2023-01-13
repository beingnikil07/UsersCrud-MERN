import User from "../schema/user-schema.js";

// for add data to database
export const addUser = async (req, res) => {
  const user = req.body;
  //created object of our Schema
  const newUser = new User(user); //sending body data to our schema for the purpose of validation

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


//for get data from database
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


//for get only a particular user data 
export const getUser = async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);   //this will give the coresponding user id data 
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//for edit a user 
export const editUser = async (req, res) => {
  const user = req.body;  //get the data from api
  const editUser = new User(user); //it checks in schema whether user is valid or not
  //aur imp note avv editUser ke pass hamara schema hai  
  try {
    await User.updateOne({ _id: req.params.id }, user);
    res.status(200).json(editUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}


//for delete a user 
export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

}













/****************************NOTES*************************************************** */
/*
    1.body ka data hamare user mai tha aur avv humne isko apne schema mai send kiya for the
    purpose of validation

    2.Vaise req kii need padegi nhi humko kyoki hum to data ko get karenge aur wo hum res kii help se krr sakte hai

    3.Hum Schema mai find kii help se data ko get krr liya  aur phir usko ek variable mai save karwa liya
      aur usko as a json response send krr diya with status code .Find mai empty object se ye saara data load 
      find karke deta hai ek baar mai he

    */
