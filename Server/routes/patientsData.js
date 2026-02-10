//here we have to fetch the incoming request from react;
//some checks before making tokens;
//after chackes add one more to the last token number if exists
import { Router } from "express";
const patientsData = Router();

//fetch the incoming request from react;
patientsData.post("/tokens", (req, res) => {
    console.log(req.body);
});

export default patientsData;