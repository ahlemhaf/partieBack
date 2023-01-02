const path = require('path');
const Livre = require('../../Models/LivreModel')

exports.createLivre = async (req, res) => {
    try {
        if (req.file) {
            req.body.contentName = `http://localhost:4000/uploads/${req.file.filename}`
            console.log(req.body);
            await Livre.create(req.body)
            res.status(201).send({ message: 'Livre added successfully!' })
        } else {
            res.status(400).send({ message: 'Please Add pdf Files!' })
        }

    } catch (err) {
        res.status(500).send({ message: err.message || 'Error server' })
    }
}

exports.getLivre = async (req, res) => {
    const livre = await Livre.find()
    res.send(livre);

}

exports.getLivrebyid = async (req, res) => {
    try {
        const livre = await Livre.findById(req.params.id, { content: 0 })
        res.send(livre)
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Error server' })
    }
}

exports.updatelivre = async (req, res) => {
    try {
        await Livre.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ message: 'Livre updated' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Error server' })
    }
}

exports.deletelivre = async (req, res) => {
    try {
        await Livre.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'Livre deleted' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Error server' })

    }
}