import express from 'express';
import patientsData from "./routes/patientsData"
import cors from "cors";
const app = express();

//middleware for routes;
//convert the upcoming request to js object;
//the attach it to req.body;
//!without this we will get undefines!
app.use(express.json());

//cors middleware that allow our frontend to talk to backend;
app.use(cors({
    origin: "http://localhost:5173",
}));

//routes;
app.use("/api", patientsData);

app.listen(3000, () => {
    console.log('Server is running...');
});