const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ClientSchema = new Schema({
  firstName: { type: String, required: [true, 'Prénom obligatoire!'] },
  lastName: { type: String, required: [true, 'Nom de famille obligatoire!'] },
  email: { type: String, required: [true, 'E-mail obligatoire!'] },
  password: { type: String, required: [true, 'Mot de passe obligatoire!'] },
  passwordHashed: { type: String, required: true },
  address: { type: String, required: [true, 'Adresse obligatoire!'] },

},
  {
    timestamps: true, versionKey: false
  },
)

module.exports = mongoose.model('client', ClientSchema)