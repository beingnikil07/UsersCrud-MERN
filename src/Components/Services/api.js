import axios from "axios";

//For add a user
const URL = "http://localhost:5000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling add User api", error);
  }
};

// For get the user 
export const getUsers=async()=>{
    try{
        return await axios.get(`${URL}`);
    }catch(error){
        console.log("Error while calling get user api ",error);
    }
};

//for edit a user 
export const getUser=async(id)=>{
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling edit user api",error);
  }
};























/***********************************NOTES******************************************/
/*  we are using try and catch because our data put on the cloud .  
*/