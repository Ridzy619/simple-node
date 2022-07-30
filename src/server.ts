import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser'


( async () => {
  const app = express();
  const port = 8082;
  app.use(bodyParser.json());
  console.log(1000000)

  app.get("/health",  (_, res) => {
    return res.status(200).send("Healthy!")
  });

  app.get("/", async (_, res) => {
    return res.status(200).send("Healthy!")
  });

  app.listen( port, () => {
    console.log( `server running http://localhost:${ port }` );
    console.log( `press CTRL+C to stop server` );
  });
})();