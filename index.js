const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const userRoute = require("./routes/users/user")

const PORT = process.env.PORT || 3000
mongoose.connect( process.env.MONGO_URL
   ).then(()=>console.log("DB connected"))
    .catch((err)=>{
        console.log(err)
    });


//middleware

app.use(express.json());
app.use("/api/v1",userRoute)

app.listen(PORT,()=>{
    console.log("Server is running on port 3000")
});