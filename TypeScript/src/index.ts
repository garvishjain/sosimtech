import * as express from "express";
import * as bodyparser from 'body-parser';

const PORT = 5000;

const app: express.Application = express();





app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});



