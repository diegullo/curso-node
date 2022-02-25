
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base =5, listar = false, hasta ) => {


try{

    
    let salida ='';
    let consola = '';
    for(let i = 1 ; i <= hasta; i++){
    
        salida +=`${base}  x  ${i} es igual = ${base * i }\n`;
        consola +=`${base} ${'x'.yellow} ${i} es igual ${'='.red} ${base * i}\n`;
    }   
    
if(listar){
    console.log('====================='.green);
    console.log('     tabla del', base);
    console.log('====================='.green);
    

    console.log(consola);
}  
    
    fs.writeFileSync( `./salida/tabla-${base}.txt `, salida );
    
    return`tabla-${base}.txt `;


  

}catch(err){
    return err;
    throw err;
}


} 

module.exports = {

    crearArchivo
}