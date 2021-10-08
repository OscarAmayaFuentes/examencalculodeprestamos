import React , { useState , useEffect } from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from "react-native";
import colors from './src/utils/colors.js';
import Form from './src/utils/components/Form';
import Footer from './src/utils/components/Footer';
import ResultCalculation from "./src/utils/components/ResultCalculation.js";


export default function App (){
    //Estados para guardar los datos del formulario

    const[dui, setDUI] = useState(null);
    const[nombre , setNombre]= useState(null);
    const[monto , setMonto]= useState(null);
    const[total , setTotal]= useState(null);
    const[errorMessage , setErrorMessage]= useState('');
    console.log(total);
  

    useEffect (()=>{
      console.log("Limpiando");
      borrar()
      
      
      
    },[dui , nombre, monto])
    const calculate = () => {

      // Cuando se active la accion del metodo calculate, verificamos que todo no sea nulo, osea aque contenga informacion

      if(dui != "null" || nombre != "null" || monto != "null"){

      // Eliminamos, pasando el metodo reset y confirmando por medio de un mensaje

        reset()
        
        setErrorMessage("Datos eliminados con exito");
    

      }
  
      
      
      else{
         
          setErrorMessage("");
          
          const fee = dui;
          setTotal({
            
            totalPayable: (monto),
          })
          console.log(fee);
          console.log(fee);
        }
     
    };
    const borrar = () => {

      // Si lo que contiene el arreglo es nulo vamos a verificar

      if(dui == "null" || nombre == "null" || monto == "null"){
        reset()  

      }     
      
      else{
        // Validaciones 

        if(!dui){
          setErrorMessage("Registrar numero de dui");

        }
        else if (!nombre)
        {

          setErrorMessage("Registrar nombre");
        } 
        else if (!monto)

        {

          setErrorMessage("Registrar monto");
        } 
        else {

          setErrorMessage("Datos registrados con exito");
        }
         
        
          
          const fee = dui;
          setTotal({
            
            totalPayable: (monto),
          })
          console.log(fee);
          console.log(fee);
        }
     
    }
    
    const reset = () => {
      setErrorMessage("");
      setTotal(null);

    }
  return(
    <>
      <StatusBar barStyle ="light-content"/> 
      <SafeAreaView style ={styles.safeArea}>
        <View style={styles.background}
        
        />
        <Text style={styles.titleApp}>Cotizador de prestamos</Text>

        <Form 
            setDUI={setDUI} 
            setNombre={setNombre} 
            setMonto ={setMonto}
        />
       
      </SafeAreaView>
        <ResultCalculation 
          errorMessage={errorMessage}
          dui={dui}
          nombre={nombre}
          monto={monto}
          total={total}
          />
          <Footer calculate ={calculate}/>      
    </>
  );

}
const styles = StyleSheet.create({

  safeArea:{
    height: 290,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems:"center",
  },
  background:{
    backgroundColor : colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    position:"absolute",
    zIndex: -1,
  },
  titleApp:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,

  },
});