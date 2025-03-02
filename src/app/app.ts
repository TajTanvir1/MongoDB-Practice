import express, { Request, Response } from 'express';
const app = express()
const port = 3000

// parsers
app.use(express.json());

app.get('/', (req : Request, res: Response) => { //export from express
  res.send('Hello Developers World!')
})

app.post('/',(req: Request, res: Response)=>{
    console.log(req.body);
    res.send("Got Data")
})


export default app;

