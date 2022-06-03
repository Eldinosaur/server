const Core = require('../models/coreModel')

exports.addCore = async(request, response)=>{
    try{
        let core
        core = new Core(request.body)
        await core.save()
        response.send(core)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al insertar el registro')
    }
}

exports.loadCore = async(request, response)=>{
    try{
        const agencies = await Core.find()
        response.json(agencies)

    }catch(error){
        console.log(error)
        response.status(500).send('Error al cargar los registros')
    }
}

