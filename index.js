const express = require('express');
const app = express();



app.get('/',(req,res)=>{
    res.send('I know how to open node yess')
})
app.listen(4200,()=>console.log('Listening to port 3000'))