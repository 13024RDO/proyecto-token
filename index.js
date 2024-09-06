import express, { request, response } from "express";
import { PORT } from ".config.js";

const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!!");
});

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`);
});
