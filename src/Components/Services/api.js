import axios from 'axios';

const URL = "http://localhost:5000";  
export const addUser = async (data) => {
    try {

        return await axios.post(`${URL}/add`, data);
        //Avv meri sabhi api iss url prr aakar hit hongi ,yha prr hum post api ko call krr rhe hai 
    } catch (error) {
        console.log('Error while calling add User api', error);
    }
}


