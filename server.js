const express = require("express");
const connectDB = require("./Config/ConnectDB");
const AuthUserRouter = require("./Routes/AuthUserRouter");
const AuthSellerRouter = require("./Routes/AuthSellerRouter");
const UserMRouter = require("./Routes/UserMRouter");
const SellerMRouter = require("./Routes/SellerMRouter");
const app = express();
const port = process.env.port || 5000;
connectDB();
app.use(express.json());
app.use("/api/authUser", AuthUserRouter);
app.use("/api/authSeller", AuthSellerRouter);
app.use("/api/user", UserMRouter);
app.use("/api/seller", SellerMRouter);

app.listen(port, console.log(`server is up and running on localhost:${port}`));
