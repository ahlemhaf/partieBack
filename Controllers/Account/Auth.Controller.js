const Client = require('../../Models/ClientModel')
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Token = require('../../Models/token')


/***** */

exports.register = async (req, res) => {
  try {
    const Found = await Client.findOne({ email: req.body.email })
    if (Found !== null) {
      res.status(400).send({ message: 'email address was used!' });
    }
    else {
      const salt = bcrypt.genSaltSync(10);
      req.body.passwordHashed = bcrypt.hashSync(req.body.password, salt);
      let transporter = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.port,
        secure: false,
        auth: {
          user: process.env.email,
          pass: process.env.password,
        },
      });
      
      await Client.create(req.body)
      res.send({ message: 'Your registration was completd successfully !' })
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "An error occured" });
  }

}


exports.login = async (req, res) => {
    try {
      const user = await Client.findOne({ email: req.body.email })
      if (user != null && (await bcrypt.compare(req.body.password, user.passwordHashed))) {
        const data = {
          useremail: user.email,
          userId: user._id
        }
        var token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).send({ message: 'connected successfully!', token: token })
      }
      else {
        res.status(400).send({ message: ' Please verify your email address and your password !' })
      }
    }
    catch (error) {
      res.status(500).send({ message: error.message || "An error occured" });
    }
  }

 