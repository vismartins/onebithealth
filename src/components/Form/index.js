import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from "./Title/style";
import ResultImc from "./ResultImc/Index";


export default function Form(){

const [height,setHeight]= useState(null)
const [weight,setWeight]= useState(null)
const [messageImc,setMessageImc]= useState("Preencha o peso e altura")
const [imc,setImc]= useState(null)
const [textButton,setTextButton]= useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if (weight!=null && weight!=null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} placeholder='Ex=1.75' keyboardType='numeric' onChangeText={setHeight} value={height}/>
                <Text>Peso</Text>
                <TextInput style={styles.input} placeholder='Ex=70.00' keyboardType='numeric' onChangeText={setWeight} value={weight}/>
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationImc()}}/>
                <Text style={styles.textButtonCalculator}/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}