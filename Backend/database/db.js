import mongoose from 'mongoose';

//receiving values of username and password from function calling
const Connection = async (username, password) => {
    // Url mai password ko replace karna hota hai jo user banate time rakha tha 
    const URL = `mongodb+srv://${username}:${password}@crud.7zwy1c8.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        //Ye jo MongoDb kii string hai ye ek function hai jo ek promise ko return karegi
        //so we have to handle it. 
        console.log("connected to Mongo Successfully:)");
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}
export default Connection;





























/**************************NOTES************************************************* */
/*connect method takes two param first one is uri and second one is values
 * MongoDb internally use karta hai server direcory ,server discovery and monitory engine ka
   use unifiedTopology ye bta rha hai kii hai purane wale use nii karne kyuki wo deprecated ho
   chuke hai ,isko true karne prr ye hamesha latest use karega

    Url parser bhi latest use version ka use kro ye bta rha hai usenewparser
 */