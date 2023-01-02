const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const bodyParser=require('body-parser')
const dotenv=require('dotenv')

const authentification=require('./Routes/AuthRoutes')
const user=require('./Routes/ClientRoutes')
const categorie=require('./Routes/CategorieRoutes')
const livre=require('./Routes/LivreRoutes')
const path = require('path');


dotenv.config()
require('./Passport/bearer')
require('./DataBase/Connect')


const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({limit: 50*1024*1024}));
app.use(bodyParser.urlencoded({limit: "52428800", extended: true, parameterLimit:50000}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(authentification)
app.use(user)
app.use(categorie)
app.use(livre)


app.listen(4000, function () {
    console.log('web server listening on port 4000')
  })


