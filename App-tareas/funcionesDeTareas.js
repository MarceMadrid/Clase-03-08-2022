const fs = require("fs");
const tareas = fs.readFileSync("./tareas.json",{encoding:'utf-8',flag:'r'});

let accion = process.argv[2];

switch (accion){
    case 'listar':
     console.log(tareas)
     break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción')
        break;
    default:
        console.log('No entiendo qué quieres hacer')
    
}

module.exports = accion;