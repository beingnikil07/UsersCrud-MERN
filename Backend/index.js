//It is a new method defined in ES6 and you can also use require method to import express
//Ye line work kre iske liye aapko pehle package.json file mai "type":"module" set karna padega  
import express from "express"; 

const app=express();  //Initializing 
const PORT=5000;

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
});