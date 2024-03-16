import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useAdmin } from '../Contexts/Todos'

const TodoInput = () => {
    const { todos, setTodos} = useAdmin();
    const [value, setValue] = useState('');
    const handleInput = (text:string)=>{
        setValue(text)
    }
    const onSubmitted =()=>{
        setTodos([...todos,value])
    }


  return (
    <View style={styles.inputbox}>
        <Entypo name="circle" size={24} color="#fff" />
        <TextInput 
            placeholder='Create a todo'
            placeholderTextColor="gray"
            style={styles.input}
            defaultValue={value}
            onChangeText={handleInput}
            onSubmitEditing = {() => onSubmitted()}
        />
    </View>
    
  )
}

export default TodoInput

const styles = StyleSheet.create({
    input:{
        borderColor: 'transparent',
        width:'100%',
        backgroundColor:'transparent',
        color:'#fff',
        fontSize:18,
        height:'100%',
        paddingHorizontal:5,
        
    },
    inputbox:{
        width:'100%',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        columnGap:14,
        height:60,
        backgroundColor:'hsl(235, 24%, 19%)',
        borderRadius:7,
        paddingHorizontal:10,
        paddingVertical:2,
        marginHorizontal: 'auto',
    }
})