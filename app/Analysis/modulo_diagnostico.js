import {especificAnalysis} from "./modulo_preCargadoEsp";
import { completeAnalysis } from "./modulo_preCargado";

export function diagnosticar(userSymptoms, diagnostic){

    let results=[];

    //Diagnóstico completo
    if(diagnostic.includes(11)){
        let diagnosticCom = completeAnalysis(userSymptoms);
        if(diagnosticCom.length>0){ //Si se diagnósticaron enfermedades
            diagnosticCom = withLevel(diagnosticCom);
            results.push({'statusCom': diagnosticCom});
        }else{
            //El resultado no tiene coincidencias con otras enfermedades
            results.push({'statusCom': []});
        }
    }else{
        //Este tipo de diagnóstico no fue solicitado
        results.push({'statusCom': false});
    }

    //Diagnóstico específico
    if(diagnostic.filter(element => element !== 11).length!==0){
        if(diagnostic.includes(11) === true) diagnostic.splice(diagnostic.indexOf(11), 1);
        let diagnosticEsp=especificAnalysis(userSymptoms, diagnostic);
        if(diagnosticEsp.length>0){
            diagnosticEsp = withLevel(diagnosticEsp);
            results.push({'statusEsp': diagnosticEsp});
        }else{
            //El resultado no tiene coincidencias con otras enfermedades
            results.push({'statusEsp': []});
        }
        
        
    }else{
        //Este tipo de diagnóstico no fue solicitado
        results.push({'statusEsp': false});
    }
    return(results);
}

//Agregando nivel de gravedad de enfermedad
function withLevel(array){
    for(let i=1; i<=array.length; i++){
        
        array[i-1].nivel = i;
    }
    return array;
}