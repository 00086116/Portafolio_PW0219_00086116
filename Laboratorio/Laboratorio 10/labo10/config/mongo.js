const Mongoose = require("mongoose");

let database = "LaboJueves";
let host = "localhost";
let port = "27017";
let uri = `mongodb://${host}:${port}/${database}`;

const connect = ()=>{
    Mongoose.connect(uri, {useNewUrlParser: true,
    userUnifiedTopology:true})
    .then( ()=>{
        console.log(`Conexion exitosa`);
    })
    .catch( ()=>{ console.log("Erorr")});

    Mongoose.Promise=global.Promise;
}

module.exports={connect};