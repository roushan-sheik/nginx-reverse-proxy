import express from "express";
import os from "os";

const app = express();
const port = process.env.PORT || 5020;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(`Hello from Backend TWO (Port: ${port})`);
});

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Backend TWO listening on port http://0.0.0.0:${port}`);
});
