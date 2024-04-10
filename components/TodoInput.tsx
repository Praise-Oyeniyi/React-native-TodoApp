import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postTodo } from '@/api';

const TodoInput = () => {
    const [value, setValue] = useState('');
    const handleInput = (text:string)=>{
        setValue(text)
    }

    const queryClient = useQueryClient()
    

    const mutation = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })

    const onSubmitted =()=>{
        mutation.mutate({
            id: Date.now(),
            title: value,
            completed:false,
        })
        setValue('')
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