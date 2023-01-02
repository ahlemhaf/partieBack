const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;
const User=require('../Models/ClientModel')
const jwt = require("jsonwebtoken");

passport.use(new BearerStrategy((token, done) => {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)
     User.findOne({ _id: decodedData.userId }, function (err, user) {
       if (err) {return done(err); }
       if (!user) {return done(null, false); }
       return done(null, user, { scope: 'all' });
     });
   }
 ))
 ;