const mongoose = require('mongoose');



const connectDb = ( url) => {
   return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false ,
        useUnifiedTopology: true
    })
      .then(() => console.log('Connected to the Data Base..'))
      .catch((err)=> console.log('CANNOT get Connected to the Data Base'));
 }

module.exports = connectDb