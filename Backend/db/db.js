const mongoose = require('mongoose');

function connectTodb(){
    mongoose.connect(process.env.DB_CONNECT).then(
        ()=>{console.log('the server is connected')}
    ) 
    .catch(err=>console.log('not connected some internal error there in the connect function. Please recheck it to fix the error', err))
}

module.exports=connectTodb