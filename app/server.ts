import express from "express";
import os from "os";

const app = express();
const port = process.env.PORT || 3000;

const INSTANCE = process.env.INSTANCE_NAME || os.hostname();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(`Hello from ${INSTANCE}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
  console.log(`From instance ${INSTANCE}`)
});