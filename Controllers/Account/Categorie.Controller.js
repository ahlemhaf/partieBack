const path = require('path');
const Categorie = require('../../Models/CategorieModel')

exports.createCategorie = async (req, res) => {
    try {
        if (req.file) {
            req.body.contentName = `http://localhost:4000/uploads/${req.file.filename}`
            console.log(req.body);
            await Categorie.create(req.body)
            res.status(201).send({ message: 'Categorie added successfully!' })
        } else {
            res.status(400).send({ message: 'Bad request!' })
        }

    } catch (err) {
        res.status(500).send({ message: err.message || 'Error server' })
    }
}

exports.getCategorie = async (req, res) => {
    const categorie = await Categorie.find()
    res.send(categorie);

}

exports.getCategoriebyid = async (req, res) => {
    try {
        const categorie = await Categorie.findById(req.params.id, { content: 0 }).populate('la_liste_des_livres')
        res.send(categorie)
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Error server' })
    }
}

exports.updatecategorie = async (req, res) => {
    try {
        await Categorie.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ message: 'Categorie updated' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Error server' })
    }
}

exports.deletecategorie = async (req, res) => {
    try {
        await Categorie.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'Categorie deleted' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Error server' })

    }
}


exports.affecteLivre = async(req,res) => {

    try {
        await Categorie.findByIdAndUpdate(req.params.idCommande,{ $push: {la_liste_des_livres: req.params.idLivre}} );
        res.status(200).send({ message: 'Affectation avec succes' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Error server' })

    }
   
}