import express from 'express';

const router = express.Router();    //For express routing 

//Api agar post hai  aur wo /add se match ho gyi to below code chalega  
router.post('/add', () => {
    console.log("Hello ");
})

export default router;    //router ko export karne prr