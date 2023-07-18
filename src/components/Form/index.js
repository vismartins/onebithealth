import React, {useState} from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import ResultImc from "./ResultImc/Index"

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
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder='Ex=1.75' keyboardType='numeric' onChangeText={setHeight} value={height}/>
                <Text>Peso</Text>
                <TextInput placeholder='Ex=70.00' keyboardType='numeric' onChangeText={setWeight} value={weight}/>
                <Button title='Calcular IMC' onPress={()=> validationImc()}/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}