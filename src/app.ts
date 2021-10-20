import express, {Request,Response,Application} from 'express';
import dotenv from 'dotenv';

dotenv.config();
import config from './configs/config';

const app:Application = express();
const PORT = config.app.port;

app.get('/', (req:Request, res:Response):void => {
  res.send('Hello Typescript with Node.js!')
});

app.listen(PORT, ():void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
