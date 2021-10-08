import React from "react";
import { StyleSheet, TextInput, View} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import colors from "../colors";



export default function Form(props){
    const {setDUI, setNombre, setMonto} = props;
    return(
        <View style={styles.ViewForm}>
            <View>
            <TextInput placeholder="DUI" 
                keyboardType="numeric" 
                style={styles.input2}  
                onChange={(e)=> setDUI(e.nativeEvent.text)}          
            />
                         
                        
            </View>

            <View>
            <TextInput placeholder="Nombre" 
                        
                        style={[styles.input2]}
                        onChange={(e)=> setNombre(e.nativeEvent.text)}
            />
            </View>
            <View>
            <TextInput placeholder="Monto" 
                        
                        style={[styles.input2]}
                        keyboardType="numeric"
                        onChange={(e)=> setMonto(e.nativeEvent.text)}
            />
            </View>
        
        </View>

        

    );
    
};

const styles = StyleSheet.create({
    ViewForm: {
        position:"absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent:"center",

    },
    viewInputs: {
        flexDirection: "row",
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal:20

    },
    input2:{
        fontSize:16,
            paddingVertical:10,
            paddingHorizontal:8,
            borderWidth:0.5,
            borderColor:"grey",
            borderRadius:4,
            color:"black",
            paddingRight:30,
            backgroundColor:"#ffff",
    },
    inputPercentage:{
        width:"40%",
        marginLeft: 5,


    },

});

const PicketSelectStyles = StyleSheet.create({

    inputAndroid:{
            fontSize:16,
            paddingVertical:10,
            paddingHorizontal:8,
            borderWidth:0.5,
            borderColor:"grey",
            borderRadius:4,
            color:"black",
            paddingRight:30,
            backgroundColor:"#ffff",
            

    }
})