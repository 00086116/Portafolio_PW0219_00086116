
const insert = (req, res)=>{
    let registro =new Registro({
        carnet :req.body.carnet,
        shedule: req.body.shedule,
        isLate:req.body.isLate
    
});

registro.save((err)=>{
    if(err) return res.status(500).json{mensaje:"Error"})
    res.status(201).json({mensaje: "yay"})

});

const getOneId=