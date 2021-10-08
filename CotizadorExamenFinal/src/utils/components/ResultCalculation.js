import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ResultCalculation(props){

    console.log(props);
    const{dui, nombre, monto, total, errorMessage} = props;

    //Obteniendo los datos mediante la API

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          nombre2API: nombre,
          monto2API: monto,
          dui2API: dui,
          MensajeImportanteAPI: errorMessage,
  
          
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
        
    // Finalizando API

    return(
        <View style={styles.content}>
            {total &&(
                <View style={styles.boxResult}>
                    <Text style={styles.title}>Resumen</Text>
                        <View style={styles.value}>
                            <Text>Numero de DUI:</Text>
                            <Text>{[dui]}</Text>
                        </View>
                        <View style={styles.value}>
                            <Text>Tu nombre:</Text>
                            <Text>{[nombre]}</Text>
                        </View>
                        <View style={styles.value}>
                            <Text>Monto a pagar:</Text>
                            <Text>{'$ '+[monto]}</Text>
                        </View>
                                           
                </View>
            )}
            <View>
                <Text style ={styles.error}>
                    {errorMessage}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        	marginHorizontal:40,


    },

    title:{
        fontSize: 25,
        textAlign:"center",
        fontWeight:"bold",
        marginBottom: 20,
    },
    boxResult:{
        padding:30,
    },
    value:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom: 20,
    },
    error:{
        textAlign:"center",
        color:"#f00",
        fontWeight:"bold",
        fontSize:20,

    }
})