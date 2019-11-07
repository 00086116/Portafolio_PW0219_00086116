const Mongoose = require("mongoose");
const Schema=Mongoose.Schema({
    carnet:{ 
        type: String,
        required: true
    },
    schedule: String,
    isLate: Boolean
});

module.exports=Mongoose.model("Registro", RegistroSchema);  
 
