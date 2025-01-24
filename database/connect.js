const mongoose = require("mongoose");

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`DB connected with port ${mongoose.connection.host}`         
        );
    }).catch(err=>{
         console.log(`Connection Error ${err}`
         );
    });
};


module.exports = connectDB;