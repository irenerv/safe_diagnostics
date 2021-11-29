import {sortBy} from "lodash";
import * as data from "./enfermedades.json";

let modulo_datos=[
    [0.4,0.7,0.5,0.2,0.9,0.5,0.2,0,0,0.6,0.6,0.7,0.5,0,0,0.1,0,0.9,0,0.8,0,0,0,0,0,0,0,],//1
    [0,0.9,0.6,0,0.6,0.8,0.7,0.1,0.5,0.9,0,0.5,0,0,0,0.3,0,0,0,0.6,0,0,0,0,0,0,0],//2
    [0.9,0,0,0.7,0.9,0.6,0.4,0.6,0,0,0.5,0.5,0,0.6,0.5,0.2,0,0,0.3,0.6,0,0,0,0,0,0,0],//3
    [0,0.7,0,0.6,0,0.8,0,0.3,0,0.2,0,0,0.9,0,0.7,0.8,0,0,0,0,0,0,0,0,0,0.3,0],//4
    [0.9,0,0.8,0,0.6,0.9,0.8,0.7,0,0,0.5,0.7,0,0,0.8,0,0.9,0.8,0.7,0.5,0,0,0,0,0,0.7,0.8],//5
    [0.3,0,0,0,0,0.4,0,0,0,0.6,0,0.6,0,0.7,0.8,0.4,0.3,0,0,0,0.3,0,0.3,0.5,0.9,0.4,0.7],//6
    [0,0,0,0,0,0.6,0,0.6,0,0,0,0,0,0,0,0,0.6,0,0,0,0.8,0.8,0.9,0.6,0,0.8,0],//7
    [0,0,0,0,0,0.6,0.5,0.6,0,0,0,0,0,0,0,0,0,0,0,0.7,0,0,0.9,0,0,0.8,0.9],//8
    [0.7,0,0,0.1,0,0.6,0.7,0.7,0,0,0,0.6,0,0,0,0,0,0,0.6,0.5,0,0,0,0,0,0.5,0.8],//9
    [0,0,0.9,0,0,0.7,0,0.7,0,0,0,0.6,0.6,0.7,0.8,0,0,0,0,0,0.5,0,0.2,0,0.8,0.3,0]//10
];

export function completeAnalysis(userSymptoms,modulo=modulo_datos){
    const umbral=3;
    let interseccion = [];
    let valoresInt=[]; //valores de la interseccion
    var sumaSintomas = [];
    var suma=0;
    let datos;

    for (let i=0; i<modulo.length; i++){ //Recorrido enfermedades
        for(let j=0; j<modulo[i].length; j++){ //Recorrido de sintomas
            if(userSymptoms[j] < modulo[i][j]){
                //interseccion[i][j]=userSymptoms[j]
                valoresInt.push(userSymptoms[j]);
            }else{
                valoresInt.push(modulo[i][j]);
                //interseccion[i][j]=modulo[i][j]
            }
            //interseccion.push(valoresInt);
            suma+=valoresInt[j];
            suma=Number(suma.toFixed(2));
        }
        interseccion.push(valoresInt);
        //Umbralización
        if(umbral < suma){
            datos=data.enfermedades[i+1];
            sumaSintomas.push(
                {
                    "enfermedad":datos.id, 
                    "valor":suma, 
                    "name":datos.name, 
                    "info": datos.info, 
                    "fuente": datos.fuente,
                    "nivel": 0, 
                }
            );
        } 
        suma=0;
        valoresInt=[];
    }
    if(sumaSintomas.length>0){
        sumaSintomas = sortBy(sumaSintomas, ['valor']).reverse();
    }
    
    return sumaSintomas;   
}
