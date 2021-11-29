//Importaciones
import React, { useState} from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions, TouchableOpacity } from "react-native";
import { Icon, Input, Button} from "react-native-elements";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import uuid from "random-uuid-v4";
import moment from 'moment';
import { InputCheckBox } from "../inputs/InputCheckBox";
import { InputPicker } from "../inputs/InputPicker";
import { InputSlider } from "../inputs/InputSlider";
import GeneralText from "../general/GeneralText";
import {diagnosticar} from "../../Analysis/modulo_diagnostico";
const db = firebase.firestore(firebaseApp);
const widthScreen = Dimensions.get("window").width;

//Formulario de posts
export default function NewDiagnosticForm(props) {
    const { toastRef, setIsLoading, navigation } = props;
    const [ isVisibleBox, setIsVisibleBox] = useState(false);
    //UseState de variables del formulario
    const currentDate = moment(new Date()).format('lll');
    const [diagnEsp, setDiagnEsp] = useState({});
    const [identifier, setIdentifier] = useState(uuid());
    const [aumentoPeso, setAumentoPeso] = useState(0);
    const [perdidaPeso, setPerdidaPeso] = useState(0);
    const [aumentoApetito, setAumentoApetito] = useState(0);
    const [faltaApetito, setFaltaApetito] = useState(0);
    const [sed, setSed] = useState(0);
    const [fatiga, setFatiga] = useState(0);
    const [ansiedad, setAnsiedad] = useState(0);
    const [depresion, setDepresion] = useState(0);
    const [temblores, setTemblores] = useState(0);
    const [taquicardia, setTaquicardia] = useState(0);
    const [ritmoCLento, setRitmoCLento] = useState(0);
    const [presionAlta, setPresionAlta] = useState(0);
    const [presionBaja, setPresionBaja] = useState(0);
    const [ronquera, setRonquera] = useState(0);
    const [dolorArtic, setDolorArtic] = useState(0);
    const [hipoglucemia, setHipoglucemia] = useState(0);
    const [grasaZMedia, setGrasaZMedia] = useState(0);
    const [cicatrizacionL, setCicatrizacionL] = useState(0);
    const [acne, setAcne] = useState(0);
    const [pielSeca, setPielSeca] = useState(0);
    const [desarrolloMus, setDesarrolloMus] = useState(0);
    const [crecimientoVello, setCrecimientoVello] = useState(0);
    const [desarrolloGen, setDesarrolloGen] = useState(0);
    const [mamas, setMamas] = useState(0);
    const [manosPies, setManosPies] = useState(0);
    const [apetitoSex, setApetitoSex] = useState(0);
    const [irrMenstruacion, setIrrMenstruacion] = useState(0);
    
    //Función de validación de datos y petición a la API para almacenamiento de información
    const addDiagnostic = () => {

        if (!diagnEsp
            ) {
            toastRef.current.show("Debes elegir por lo menos un tipo de diagnóstico");
        } else {
            const userSymptoms=[aumentoPeso,
                perdidaPeso,
                aumentoApetito,
                faltaApetito,
                sed,
                fatiga,
                ansiedad,
                depresion,
                temblores,
                taquicardia,
                ritmoCLento,
                presionAlta,
                presionBaja,
                ronquera,
                dolorArtic,
                hipoglucemia,
                grasaZMedia,
                cicatrizacionL,
                acne,
                pielSeca,
                desarrolloMus,
                crecimientoVello,
                desarrolloGen,
                mamas,
                manosPies,
                apetitoSex,
                irrMenstruacion];
            setIsLoading(true);

            //Llamada a la función diagnosticar, para realizar el diagnóstico de enfermedades según síntomas
            let diagnostic = diagnosticar(userSymptoms, diagnEsp);

            //Almacenamiento en la base de datos
            if(diagnostic[0]['statusCom'] !== false || diagnostic[0]['statusCom'] !==[]){
                db.collection("completeDiagnostic")
                .add({
                    idRegister:identifier,
                    createAt: currentDate,
                    createBy: firebase.auth().currentUser.uid,
                    datos:diagnostic[0]['statusCom'],
                })
                .then(() => {
                    setIsLoading(false);
                }).catch(() => {
                    setIsLoading(false);
                    toastRef.current.show("Error al analizar tus sintomas, intentalo más tarde");
                })
            }
            if(diagnostic[1]['statusEsp'] !== false || diagnostic[0]['statusCom'] !==[]){
                db.collection("especificDiagnostic")
                .add({
                    idRegister:identifier,
                    createAt: currentDate,
                    createBy: firebase.auth().currentUser.uid,
                    datos : diagnostic[1]['statusEsp'],
                })
                .then(() => {
                    setIsLoading(false);
                }).catch(() => {
                    setIsLoading(false);
                    toastRef.current.show("Error al analizar tus sintomas, intentalo más tarde");
                })
            }
            toastRef.current.show("¡Análisis completado!");
            navigation.navigate("typeResult", {diagnostic});
        }
    }

    return (
        //Elemeentos de página
        <ScrollView style={styles.scrollView}>
            <View style={styles.viewHeader}></View>

            <View style={styles.formStyle}>
                {/* Llamada al formulario */}
                <InputCheckBox
                    isVisibleBox={isVisibleBox} 
                    setIsVisibleBox={setIsVisibleBox}
                    setValue={setDiagnEsp}
                    toastRef={toastRef}
                />
                <FormAdd
                    setIsVisibleBox={setIsVisibleBox}
                    aumentoPeso={aumentoPeso}
                    setAumentoPeso={setAumentoPeso}
                    perdidaPeso={perdidaPeso}
                    setPerdidaPeso={setPerdidaPeso}
                    aumentoApetito={aumentoApetito}
                    setAumentoApetito={setAumentoApetito}
                    faltaApetito={faltaApetito}
                    setFaltaApetito={setFaltaApetito}
                    sed={sed}
                    setSed={setSed}
                    fatiga={fatiga}
                    setFatiga={setFatiga}
                    ansiedad={ansiedad}
                    setAnsiedad={setAnsiedad}
                    depresion={depresion}
                    setDepresion={setDepresion}
                    temblores={temblores}
                    setTemblores={setTemblores}
                    taquicardia={taquicardia}
                    setTaquicardia={setTaquicardia}
                    ritmoCLento={ritmoCLento}
                    setRitmoCLento={setRitmoCLento}
                    presionAlta={presionAlta}
                    setPresionAlta={setPresionAlta}
                    presionBaja={presionBaja}
                    setPresionBaja={setPresionBaja}
                    ronquera={ronquera}
                    setRonquera={setRonquera}
                    dolorArtic={dolorArtic}
                    setDolorArtic={setDolorArtic}
                    hipoglucemia={hipoglucemia}
                    setHipoglucemia={setHipoglucemia}
                    grasaZMedia={grasaZMedia}
                    setGrasaZMedia={setGrasaZMedia}
                    cicatrizacionL={cicatrizacionL}
                    setCicatrizacionL={setCicatrizacionL}
                    acne={acne}
                    setAcne={setAcne}
                    pielSeca={pielSeca}
                    setPielSeca={setPielSeca}
                    desarrolloMus={desarrolloMus}
                    setDesarrolloMus={setDesarrolloMus}
                    crecimientoVello={crecimientoVello}
                    setCrecimientoVello={setCrecimientoVello}
                    desarrolloGen={desarrolloGen}
                    setDesarrolloGen={setDesarrolloGen}
                    mamas={mamas}
                    setMamas={setMamas}
                    manosPies={manosPies}
                    setManosPies={setManosPies}
                    apetitoSex={apetitoSex}
                    setApetitoSex={setApetitoSex}
                    irrMenstruacion={irrMenstruacion}
                    setIrrMenstruacion={setIrrMenstruacion}
                />

                <Button
                    title="Enviar sintomas"
                    onPress={addDiagnostic}
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.btnStyle}
                    titleStyle={styles.btnTitleStyle}
                />

            </View>
              
        </ScrollView>
    );
}

//ofrmulario
function FormAdd(props) {
    const {
        setIsVisibleBox,
        aumentoPeso,
        setAumentoPeso,
        perdidaPeso,
        setPerdidaPeso,
        aumentoApetito,
        setAumentoApetito,
        faltaApetito,
        setFaltaApetito,
        sed,
        setSed,
        fatiga,
        setFatiga,
        ansiedad,
        setAnsiedad,
        depresion,
        setDepresion,
        temblores,
        setTemblores,
        taquicardia,
        setTaquicardia,
        ritmoCLento,
        setRitmoCLento,
        presionAlta,
        setPresionAlta,
        presionBaja,
        setPresionBaja,
        ronquera,
        setRonquera,
        dolorArtic,
        setDolorArtic,
        hipoglucemia,
        setHipoglucemia,
        grasaZMedia,
        setGrasaZMedia,
        cicatrizacionL,
        setCicatrizacionL,
        acne,
        setAcne,
        pielSeca,
        setPielSeca,
        desarrolloMus,
        setDesarrolloMus,
        crecimientoVello,
        setCrecimientoVello,
        desarrolloGen,
        setDesarrolloGen,
        mamas,
        setMamas,
        manosPies,
        setManosPies,
        apetitoSex,
        setApetitoSex,
        irrMenstruacion,
        setIrrMenstruacion
    } = props;


    return (
        //Entradas del usuario
        <View style={styles.viewForm}>

            <Text style={styles.textHeader}>Nuevo Diagnóstico</Text>
            <Text style={styles.pickerHeader}>Registra tus sintomas</Text>

            <TouchableOpacity style={styles.containerInput} onPress={() => setIsVisibleBox(true)}>
                <Text style={{color:"#525252", fontSize:16,paddingHorizontal:10, paddingVertical:15 }}>Elegir Tipo de Diagnóstico</Text>
                <Icon
                        type="font-awesome"
                        name="list"
                        iconStyle={{ color:  "#525252", paddingLeft:80, paddingTop:18}}
                        size={20}
                    />
            </TouchableOpacity>

            <GeneralText text="Aumento de peso" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setAumentoPeso}
                value={aumentoPeso}
                opcion={2}
            />
            
            <GeneralText text="Pérdida de peso" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setPerdidaPeso}
                value={perdidaPeso}
                opcion={2}
            />
            
            <GeneralText text="Aumento de apetito" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setAumentoApetito}
                value={aumentoApetito}
                opcion={2}
            />
            
            <GeneralText text="Falta de apetito" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setFaltaApetito}
                value={faltaApetito}
                opcion={2}
            />
            
            <GeneralText text="Sed" color="#c2c2c2" paddingVer={15}/>
            <InputSlider
                setValue={setSed}
                value={sed} 
            />
            
            <GeneralText text="Fatiga" color="#c2c2c2" paddingVer={15}/>
            <InputSlider
                setValue={setFatiga}
                value={fatiga} 
            />
            
            <GeneralText text="Ansiedad" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setAnsiedad}
                value={ansiedad}
                opcion={2}
            />
            
            <GeneralText text="Depresión" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setDepresion}
                value={depresion}
                opcion={2}
            />
            
            <GeneralText text="Temblores" color="#c2c2c2" paddingVer={15}/>
            <InputSlider
                setValue={setTemblores}
                value={temblores} 
            />
            
            <GeneralText text="Taquicardia" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setTaquicardia}
                value={taquicardia}
                opcion={2}
            />

            <GeneralText text="Ritmo cardiaco lento" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setRitmoCLento}
                value={ritmoCLento}
                opcion={2}
            />

            <GeneralText text="Presión alta" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setPresionAlta}
                value={presionAlta}
                opcion={2}
            />

            <GeneralText text="Presión baja" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setPresionBaja}
                value={presionBaja}
                opcion={2}
            />

            <GeneralText text="Ronquera" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setRonquera}
                value={ronquera}
                opcion={2}
            />

            <GeneralText text="Dolor de articulaciones" color="#c2c2c2" paddingVer={15}/>
            <InputSlider
                setValue={setDolorArtic}
                value={dolorArtic} 
            />

            <GeneralText text="Hipoglucemia" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setHipoglucemia}
                value={hipoglucemia}
                opcion={2}
            />

            <GeneralText text="Formación de grasa en la sección media del cuerpo" color="#c2c2c2" paddingVer={15} align="center"/>
            <InputPicker
                setValue={setGrasaZMedia}
                value={grasaZMedia}
                opcion={2}
            />

            <GeneralText text="Cicatrización lenta" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setCicatrizacionL}
                value={cicatrizacionL}
                opcion={2}
            />

            <GeneralText text="Formación de acné" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setAcne}
                value={acne}
                opcion={2}
            />

            <GeneralText text="Piel seca" color="#c2c2c2" paddingVer={15}/>
            <InputSlider
                setValue={setPielSeca}
                value={pielSeca} 
            />

            <GeneralText text="Poco desarrollo muscular" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setDesarrolloMus}
                value={desarrolloMus}
                opcion={2}
            />

            <GeneralText text="Dificultar de crecimiento de vello facial" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setCrecimientoVello}
                value={crecimientoVello}
                opcion={2}
            />

            <GeneralText text="Poco desarrollo de los genitales" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setDesarrolloGen}
                value={desarrolloGen}
                opcion={2}
            />

            <GeneralText text="Agrandamiento de mamas" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setMamas}
                value={mamas}
                opcion={2}
            />

            <GeneralText text="Agrandamiento de manos y pies" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setManosPies}
                value={manosPies}
                opcion={2}
            />

            <GeneralText text="Disminución de apetito sexual" color="#c2c2c2" paddingVer={15}/>
            <InputSlider
                setValue={setApetitoSex}
                value={apetitoSex} 
            />

            <GeneralText text="Irregularidades en la menstruación" color="#c2c2c2" paddingVer={15}/>
            <InputPicker
                setValue={setIrrMenstruacion}
                value={irrMenstruacion}
                opcion={2}
            />
        
        </View >
    );
}


//Hoja de estilos
const styles = StyleSheet.create({
    scrollView: {
        height: "100%",
        backgroundColor: "#fff",

    },
    viewForm: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center"
    },
    viewHeader:{
        width: widthScreen, 
        height: 150, 
        backgroundColor: "#A9C4A7",
        borderBottomRightRadius: 50, 
        borderBottomLeftRadius: 50,
    },
    formStyle: {
        marginTop: 40,
    },
    textHeader: {
        fontSize: 15,
        color: "#c1c1c1",
    },
    containerInput: {
        flexDirection:"row",
        marginBottom: 45,
        width: "80%",
        height: 55,
        opacity: 0.7,
        backfaceVisibility: "hidden",
        //backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: "#A9C4A7",
        borderRadius: 10,

    },
    containerInputStyle: {
        borderBottomWidth: 0,
    },
    inputStyle: {
        color: "#202020"
    },
    picker: {
        height: 50,
        width: "80%",
        marginBottom: 10,
        color: "#c1c1c1",
        backgroundColor:"#A9C4A7",
        overflow: 'hidden',
        
    },
    pickerHeader: {
        margin: 10,
        marginBottom: 50,
        alignItems: "flex-end",
        fontSize: 19,
        color: "#c1c1c1"
    },
    btnContainer: {
        marginTop: 40,
        marginBottom: 50,
        alignItems: "center",

    },
    btnStyle: {
        width: "40%",
        height: 60,
        backgroundColor: "#F7B948",
        borderRadius: 10,
    },
    btnTitleStyle: {
        fontSize: 20,
        color: "#fff",
    }
});