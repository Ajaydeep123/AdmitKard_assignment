require("dotenv").config();
const express = require("express");
const cors = require("cors");
const otpRouter = require("./routes/otp.routes");

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());
app.use("/", otpRouter);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}...`));
