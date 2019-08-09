// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;


router.post('/symptoms/answer', function (req, res) {

    var symptoms = req.session.data['symptoms']
  
    if (symptoms == "Yes"){
      res.redirect('/symptoms/answer-yes')
    }
    else {
      res.redirect('/symptoms/answer-no')
    }
  
  })


  router.post('/symptoms/age/', function (req, res) {

    var install = req.session.data['symptoms']
  
    if (install == "15 or younger"){
      res.redirect('/symptoms/age/15')
    }
    if (install == "16 to 24"){
      res.redirect('/symptoms/age/16')
    }
    else {
      res.redirect('/symptoms/age/25')
    }
  
  })



  router.post('/get-a-test/', function (req, res) {

    var install = req.session.data['symptoms']
  
    if (install == "answer-collect"){
      res.redirect('/get-a-test/answer-collect')
    }
    if (install == "answer-order"){
      res.redirect('https://www.nhs.uk/Service-Search/Chlamydia-free-online-tests-for-u-25s/LocationSearch/344')
    }
    if (install == "answer-buy"){
      res.redirect('/get-a-test/answer-buy')
    }
    else {
      res.redirect('/location')
    }
  
  })