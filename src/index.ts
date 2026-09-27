import express from "express";
import type { Express } from "express";
const PORT = 8000;

const app:Express = express();

app.get('/', (req, res)=>{
    res.send('hello world');
})


app.listen(PORT, ():void=>{
    console.log(`app listen to ${PORT}`)
})

