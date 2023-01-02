const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LivreSchemma = new Schema(
    {
      Title: { type: String, required: true },
      Auteur: { type: String, required: true },
      Description: { type: String, required: true },
        content: { type: Buffer },
        contentName: String
    },
    {
        timestamps: true, versionKey: false
    },

);

module.exports = mongoose.model('livre', LivreSchemma)