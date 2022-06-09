const express = require("express");
const connectDB = require("./Config/ConnectDB");
const AuthUserRouter = require("./Routes/AuthUserRouter");
const app = express();
const port = process.env.port || 5000;
connectDB();
app.use(express.json());
app.use('/api', AuthUserRouter)

app.listen(port, console.log(`server is up and running on localhost:${port}`));