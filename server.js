const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
app.use(express.json())

// app.arguments(express.json());
const userRoute = require('./routes/userRoute');

app.use('/api/users/', userRoute);

const port = 5000;

app.listen(port, () => console.log(`Node Js Server Started at ${port}!`));
