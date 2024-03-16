import React from 'react'
import { View, Text, StyleSheet,FlatList, } from 'react-native/'
import { useAdmin } from '../Contexts/Todos'

const TodoLists = () => {
    const { todos} = useAdmin();

  return (
    <View style={styles.container}>
        <View>
            <FlatList
                data={todos}
                renderItem={({ item, index }) => (
                    <View style={styles.listcon} key={index}>
                        <View style={{width:'10%',}}>
                            <View style={styles.mark}></View>
                        </View>
                        <Text style={{fontSize:18, color:"#fff"}}>{item}</Text>
                    </View>
                )}
                // keyExtractor={}
                contentContainerStyle={{ rowGap: 0 }}
            />

            <View style={{backgroundColor:'#fff', width:'100%', height:.5,}}></View>
            <View style={styles.filters}>
                <Text style={{color:'#fff'}}>{ todos.length + ' Item Left'}</Text>
                <View style={styles.innercon}>
                    <Text style={{color:'#fff'}}>All</Text>
                    <Text style={{color:'#fff'}}>Active</Text>
                    <Text style={{color:'#fff'}}>completed</Text>
                </View>
                <Text style={{color:'#fff'}}>Completed</Text>
            </View>
        </View>
    </View>
  )
}

export default TodoLists

const styles= StyleSheet.create({
    container:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:7,
        marginTop:25,
        backgroundColor:'hsl(235, 24%, 19%)',
    }, 
    mark:{
        height:24, 
        width:24, 
        borderWidth:1,
        borderColor:'#fff', 
        borderRadius:50,
    },
    listcon:{
        width:'100%',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        columnGap:14,
        paddingVertical:24,
        paddingHorizontal:12,
        borderBottomColor:'#808080',
        borderBottomWidth:1,
        
    },
    filters:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        fontSize:10,
        color:"#fff",
        paddingVertical:27,
        paddingHorizontal:10,
    },
    innercon:{
        color:'#fff',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        columnGap:7,
        flexDirection:'row',
        width:'50%',
    }
})