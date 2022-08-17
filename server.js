const express = require("express");
const connectDB = require("./Config/ConnectDB");
const AuthUserRouter = require("./Routes/AuthUserRouter");
const AuthSellerRouter = require("./Routes/AuthSellerRouter");
const UserMRouter = require("./Routes/UserMRouter");
const SellerMRouter = require("./Routes/SellerMRouter");
const AdminRouter = require("./Routes/AdminRouter");
const guestRouter = require("./Routes/GuestRouter");
const path = require ("path")

const app = express();
const port = process.env.port || 5000;
connectDB();
app.use(express.json());
app.use("/api/authUser", AuthUserRouter);
app.use("/api/authSeller", AuthSellerRouter);
app.use("/api/User", UserMRouter);
app.use("/api/Seller", SellerMRouter);
app.use("/api/Admin", AdminRouter);
app.use("/api/Guest", guestRouter);


app.listen(port, console.log(`server is up and running on localhost:${port}`));
