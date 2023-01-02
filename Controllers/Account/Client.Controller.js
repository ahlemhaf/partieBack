const User = require('../../Models/ClientModel')
const bcrypt = require('bcryptjs')




exports.adduser = async (req, res) => {
    try {
        const Found = await User.findOne({ email: req.body.email })
        if (Found !== null) {
            res.status(400).send({ message: 'email is used !' });
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            req.body.passwordHashed = bcrypt.hashSync(req.body.password, salt);
            await User.create(req.body)
            res.status(201).send({ message: 'Client added successfully!' })
        }
    } catch (error) {
        res.status(500).send({ message: error.message || 'Error server' })
    }
}
exports.getuser = async (req, res) => {
    const user = await User.find()
    res.send(user);

}
exports.getuserbyid = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'error server' })
    }
}
exports.updateuser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({ message: 'client updated' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Error server' })
    }
}
exports.deleteuser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'client deleted' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'Error server' })

    }
}