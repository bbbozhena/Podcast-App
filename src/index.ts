import express from "express"
import "dotenv/config";
import "db"

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log("Port is listening in port" + PORT)
})