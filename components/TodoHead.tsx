import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons';


type Props ={
}

const TodoHead = (props: Props) => {
    const date = new Date().getDate(); //To get the Current Date
    const monthRaw = new Date().getMonth();
    const month = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const year = new Date().getFullYear(); //To get the Current Year

  return (
    <View style={styles.container}>
        <View style={styles.mainhead}>
            <Text style={styles.title}>TodoApp</Text>
            <TouchableOpacity style={{backgroundColor:'transparent',}}>
            <Feather name="sun" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
        <View>
            <Text style={{color:'#fff', paddingHorizontal:10, fontSize:18, fontStyle:'italic'}}>{date+ ' '+month[monthRaw]+', '+year }</Text>
        </View>
    </View>
  )
}

export default TodoHead


const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        color:'#fff',
        alignItems: 'flex-start',
        rowGap:15,
        paddingVertical: 40,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color:'#fff',
    },
    mainhead:{
        width:'100%',
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});
  