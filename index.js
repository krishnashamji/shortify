// DEPENDENCIES
import express from "express";
const app = express();

import { urlRoute } from "./routes/url.js";
import { connectToMongoDB } from "./connect.js";

// CONNECT TO MONGODB
connectToMongoDB(`mongodb://localhost:27017/short-url`)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("MongoDB Not Connected", error);
  });

// ROUTES
app.use(express.json())
app.use("/url", urlRoute);

// DYNAMICALLY ASSIGNED PORT
const PORT = process.env.PORT || 8001;
// STARTS THE SERVER AND MAKES IT LISTEN TO THE SPECIFIED PORT
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
