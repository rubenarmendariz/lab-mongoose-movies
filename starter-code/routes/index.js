const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities", {celebrities});
    })
    .catch(error => {
      console.log(error)
    })
});
router.get('/celebrities/:id', (req, res, next) => {
  let celebrityId = req.params.id;
  Celebrity.findOne({'_id': celebrityId})
    .then(celebrity => {
      res.render("celebrities/show", celebrity)
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;