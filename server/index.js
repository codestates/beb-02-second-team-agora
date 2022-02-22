const express = require('express');
const app = express();
const indexRouter = require('./routes');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const port = 4000;

require('dotenv').config();
const mongo_uri = process.env.MONGO_URI

app.use(cors({
    origin: "http://localhost:3000"
}))


app.use(express.json());
app.use('/', indexRouter);

mongoose
 .connect(mongo_uri)
 .then(()=> console.log("Connect Success MongoDB!"))
 .catch((err) => {console.log(err)});
 




app.listen(port, ()=> {
    console.log("linstening!!")
})

module.exports = app;