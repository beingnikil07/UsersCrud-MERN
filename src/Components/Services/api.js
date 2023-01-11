import axios from 'axios';

const URL = "http://localhost:5000";  //Avv meri sabhi api iss url prr aakar hit hongi
const addUser = async (data) => {
    try {

        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('Error while calling add User api', error);
    }
}
export default addUser;

