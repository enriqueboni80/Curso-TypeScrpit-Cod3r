const express = require("express");
const app = express();
const port = 3001;

import Carro2 from "./classes/carro";

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req: any, res: any) => {
  let carro2 = new Carro2("gol", 2003);
  res.send(carro2.showModelo())
});
