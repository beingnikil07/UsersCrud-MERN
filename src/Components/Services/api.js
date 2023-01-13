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

//for get only one particular user 

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling edit user api", error);
  }
};

//for edit a user
export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error while calling edit user api", error);
  }
}

// api for delete a user 
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling delete api ", error);
  }
}





















