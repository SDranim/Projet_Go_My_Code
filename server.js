const express = require("express");
const connectDB = require("./Config/ConnectDB");
const AuthUserRouter = require("./Routes/AuthUserRouter");
const AuthSellerRouter = require("./Routes/AuthSellerRouter");
const app = express();
const port = process.env.port || 5000;
connectDB();
app.use(express.json());
app.use("/api/authUser", AuthUserRouter);
app.use("/api/authSeller", AuthSellerRouter);

app.listen(port, console.log(`server is up and running on localhost:${port}`));
