const express = require('express');
const passport = require('passport');
const { createLivre, getLivre, getLivrebyid, deletelivre, updatelivre } = require('../Controllers/Account/Livre.Controller');
const router = express.Router();
const upload = require('../MiddleWares/multer')



router.post('/livre', [upload.single('content'), ], createLivre)
router.get('/livre', passport.authenticate('bearer', { session: false }), getLivre)
router.get('/livre/:id', passport.authenticate('bearer', { session: false }), getLivrebyid)
router.put('/livre/:id', [upload.single('content'), passport.authenticate('bearer', { session: false })], updatelivre)
router.delete('/livre/:id', passport.authenticate('bearer', { session: false }), deletelivre)


module.exports = router;