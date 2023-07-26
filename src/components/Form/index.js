import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity,Vibration,Pressable,Keyboard} from 'react-native';
import styles from './style';
import ResultImc from "./ResultImc/Index";



export default function Form(){

    const [height,setHeight]= useState(null);
    const [weight,setWeight]= useState(null);
    const [messageImc,setMessageImc]= useState(null);
    const [imc,setImc]= useState(null);
    const [textButton,setTextButton]= useState("Calcular");
    const [errorMessage,setErrorMessage]= useState(null)

    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate()
            setErrorMessage("Campo Obrigatório *")
        }
    }

    function validationImc(){
        if (weight!=null && weight!=null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        }
        else{
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e altura")
        } 
    }

    return(
        <View style={styles.formContext}>
            {imc == null ?
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} placeholder='Ex 1.75' keyboardType='numeric' onChangeText={setHeight} value={height}/>
            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} placeholder='Ex 70' keyboardType='numeric' onChangeText={setWeight} value={weight}/>
            <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationImc()}}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            </Pressable>
            :
            <View style={styles.exhibitionResultImc}>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationImc()}}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            </View>
            }
        </View>
    );
}