//here we have to fetch the incoming request from react;
//some checks before making tokens;
//after chackes add one more to the last token number if exists
import { Router } from "express";
import { userData } from '../Data/store';

const patientsData = Router();

//fetch the incoming request from react;
patientsData.post("/tokens", (req, res) => {
    console.log(req.body);

    const dateObject = new Date();
    const today = dateObject.toISOString().split("T")[0];

    //checking for today's date
    //as token number is totally based on that only;
    const todaysPatients = userData.filter((patient) =>
        patient.date === today
    );

    //the token variable;
    let token;
    //token generation;
    if (todaysPatients.length === 0) {
        token = 1;
    } else {
        const lastTokenNumber = todaysPatients[todaysPatients.length - 1].token;
        token = lastTokenNumber + 1;
    }

    const tokenObject = {
        name: req.body.name,
        phone: req.body.phone,
        token: token,
        date: today,
        generationTime: dateObject.toLocaleTimeString(),
    }

    console.log(todaysPatients); // [] now

    // save to memory
    userData.push(tokenObject);
    console.log("Saved patient:", tokenObject);
    // send response to frontend
    res.json(tokenObject);
});

export default patientsData;