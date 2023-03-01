const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { dbInit } = require('./initial/dbInit');
const { api } = require('./initial/routesInit');



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
cors(app);

dbInit();
app.listen(7000, ()=>{
    console.log("backend serve on http://localhost:7000");
});

app.get('/', (req, res)=>{
    res.send("hello from backend")
});
app.use("/",api)



