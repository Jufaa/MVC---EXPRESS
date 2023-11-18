import express from "express";
import mongoose from "mongoose";
import routes from "./routes/Task.js";

const app = express();
const port = 3001;
const url = "mongodb://0.0.0.0:27017/TaskDB";

app.use(express.json());

app.use("/", routes);

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
