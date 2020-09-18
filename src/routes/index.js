const express = require('express');
const router = express.Router();


router.get('/',(req, res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
   res.render('index', { title: 'First Web'});
 });


 router.get('/contact', (req, res)=>{
    res .render('contact', {title: 'Page contact'});
 });
 module.exports = router;