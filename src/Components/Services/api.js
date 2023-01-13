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

// For get all user 
export const getUsers = async () => {
  try {
    return await axios.get(`${URL}`);
  } catch (error) {
    console.log("Error while calling get user api ", error);
  }
};

//for edit a user 
//Ye pehle wala function to ek user ke data ko dega jisko edit karna hai api ke through 
export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling edit user api", error);
  }
};

//avv edit mai data aa gya to data ko edit karne ke baad wo svv changes humko dobara database mai purane wale se replace karne padenge

export const editUser = async (user, id) => {
  try {
    //ye ek post api to hum body send krr sakte hai isliye maine user ko send kiya 
    return await axios.put(`${URL}/${id}`, user);

  } catch (error) {
    console.log("Error while calling edit user api", error);
  }
}


// api for delete a user 
// id is receiving from api calling function that is present inside home component
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling delete api ", error);
  }
}





















