const express= require('express');
const app = express();
const path =require('path');
//settings
app.set('port', 3000);

//middleware


//routers
app.get('/',(req, res)=>{
   res.sendFile(path.join(__dirname,'views/index.html'));
});

//static files


//listening the server 
app.listen(app.get('port'), ()=>{
    console.log('Server sucess port ', app.get('port'));
});