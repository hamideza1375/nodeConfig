const express = require("express");
const mongoose = require('mongoose');
const winston = require('winston');
const dotEnv = require("dotenv"); dotEnv.config({ path: "./.env" }); // process.env.SECRET
const { setHeaders } = require("./middleware/headers");
const Mobile = require("./router/MobileRouter");
const User = require("./router/UserRouter");
const Admin = require("./router/AdminRouter");
const ErrorMiddleware = require('./middleware/Error');
// const fileUpload = require("express-fileupload");

const app = express();

winston.add(new winston.transports.File({ filename: 'error-log.log' }));

process.on('uncaughtException', (err) => {
  console.log(err);
  winston.error(err.message);
});
process.on('unhandledRejection', (err) => {
  console.log(err);
  winston.error(err.message);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(setHeaders);
app.use(express.static("public"));
app.use(express.static("node_modules"));

app.set('view engine', 'ejs');
app.set('views', './views');

// app.use(fileUpload());
app.use(ErrorMiddleware);

app.use(Mobile)
app.use(User)
app.use(Admin)

app.use((req, res) => res.send("<h1 style='text-align:center;color:red; font-size:55px'> 404 </h1>"));

const port = 4000
app.listen(port, (err) => { console.log(`App Listen to port ${port}`) })

mongoose.set('strictQuery', false);
mongoose.connect(
  "mongodb://localhost:27017/mobile",
  {
    useNewUrlParser: true, useUnifiedTopology: true
   

  })  .then(() => console.log('db connected'))
  .catch((err) => console.error('db not connected', err));
