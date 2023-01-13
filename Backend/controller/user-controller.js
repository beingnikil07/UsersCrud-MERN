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
    res.status(404).res({ message: error.message });
  }
};















/****************************NOTES*************************************************** */
/*
    1.body ka data hamare user mai tha aur avv humne isko apne schema mai send kiya for the
    purpose of validation

    2.Vaise req kii need padegi nhi humko kyoki hum to data ko get karenge aur wo hum res kii help se krr sakte hai

    3.Hum Schema mai find kii help se data ko get krr liya  aur phir usko ek variable mai save karwa liya
      aur usko as a json response send krr diya with status code .Find mai empty object se ye saara data load 
      find karke deta hai ek baar mai he

    */
