import express from "express";
import os from "os";

const app = express();
const port = process.env.PORT || 3000;

const INSTANCE = process.env.INSTANCE_NAME || os.hostname();

app.get("/", (req, res) => {
  res.send(`Hello from ${INSTANCE}!`);
});

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Server ${INSTANCE} is running on http://0.0.0.0:${port}`);
});
