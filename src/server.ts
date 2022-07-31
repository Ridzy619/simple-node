import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser'


( async () => {
  const app = express();
  const port: number = +(process.env.PORT || 8080);
  app.use(bodyParser.json());

  app.get("/health",  (_, res) => {
    return res.status(200).send("Healthy!")
  });

  app.get("/", async (_, res) => {
    return res.status(200).send("Healthy!")
  });

  app.listen( port, '0.0.0.0', () => {
    console.log( `server running http://0.0.0.0:${ port }` );
    console.log( `press CTRL+C to stop server` );
  });
})();