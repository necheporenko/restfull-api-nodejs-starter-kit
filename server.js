import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import Promise from "bluebird";
import morgan from "morgan";
import passport from "passport";
import dotenv from "dotenv";
import routes from "./server/routes/index.route";
import passportConfig from "./server/config/passport";

const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow requests from any origin
app.use(cors({ origin: "*" }));

// log to console
app.use(morgan("dev"));

// Use the passport package in our application
app.use(passport.initialize());

/** plugin bluebird promise in mongoose */
mongoose.Promise = Promise;

/**
 * Connection to db
 */
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", () => console.log("[✔️] MongoDB: Connection succeeded"));
db.on("error", () => {
  throw new Error("[❌] MongoDB: Unable to connect");
});

/**
 * Pass passport for configuration
 */
passportConfig(passport);

/** Mount all routes on /api/v1 path */
app.use("/api/v1", routes);

app.get("/", (req, res) => res.send("Welcome!"));

app.listen(process.env.PORT, function() {
  console.log(`🚀 Server listening on port ${process.env.PORT}`);
});
