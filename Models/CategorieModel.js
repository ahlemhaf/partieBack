const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CategorieSchemma = new Schema(
    {
        Name_of_Categorie: { type: String, required: true },
        la_liste_des_livres: [{ type: Schema.Types.ObjectId, ref: 'livre'}],
        contentName: String
    },
    {
        timestamps: true, versionKey: false
    },

);

module.exports = mongoose.model('categorie', CategorieSchemma)