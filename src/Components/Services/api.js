import axios from 'axios';

const URL = "";
const addUser = async (data) => {
    try {

        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('Error while calling add User api', error);
    }
}
export default addUser;

/* Notes
/* Jav kabhi bhi api call karte hai to async/await ka use isliye karte hai kyuki api call
 *  ek asynchronous call hoti hai isliye hum async/await lga krr handle karte hai request ko 
 * 
 * Aur ye api component isliye banaya jisse api ko seprate rakh sake,abhi mai backend banaunga 
 * then i will write url.
 */