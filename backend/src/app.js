require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

// const setRoutes = require('./routes/index');
const {
  authMiddleware,
  adminMiddleware,
} = require("./middleware/authentication");
const connectDB = require("./config/connectDB");
const auth = require("./routes/auth");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoutes");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", auth);
// setRoutes(app);
app.use("/user", authMiddleware, userRoute);
app.use("/admin", authMiddleware, adminMiddleware, userRoute);
app.use("/products", productRoute);
app.listen(PORT, async () => {
  await connectDB();

  console.log(`Server is running on port ${PORT}`);
});
