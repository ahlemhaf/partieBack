const express = require('express');
const passport = require('passport');
const { createCategorie, getCategorie, getCategoriebyid, updatecategorie, deletecategorie, affecteLivre } = require('../Controllers/Account/Categorie.Controller');
const router = express.Router();
const upload = require('../MiddleWares/multer')



router.post('/categorie',[upload.single('content'), passport.authenticate('bearer', { session: false })], createCategorie)
router.get('/categorie', passport.authenticate('bearer', { session: false }), getCategorie)
router.get('/categorie/:id', passport.authenticate('bearer', { session: false }), getCategoriebyid)
router.put('/categorie/:id', [upload.single('content'), passport.authenticate('bearer', { session: false })], updatecategorie)
router.delete('/categorie/:id', passport.authenticate('bearer', { session: false }), deletecategorie)
router.put('/affecte/:idCategorie/livre/:idLivre', passport.authenticate('bearer', { session: false }),affecteLivre)

module.exports = router;