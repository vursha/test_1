/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { StyleSheet, Text, View,Image ,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react';
import  {BookItems}  from './BookItems';

const Book2 = () => {
    
  return (
      <>
     <ScrollView>
      {BookItems.map((item,index) => (
    <View style={{marginBottom:20,flexDirection:"row"}} key={index}>
      <Image source={item.image} 
      resizeMode="contain"
      style={{width: 80, height: 130, borderRadius: 10,marginLeft:30}}
      />
      <View style={{flexDirection:"column",marginLeft:20,justifyContent:"space-evenly"}}>
      <Text style={{color:"white"}}>{item.name}</Text>
      <Text style={{color:"white"}}>{item.writer}</Text>
      <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
        <Text style={{color:"white"}}>{item.pages[0]}</Text>
        <Text style={{color:"white"}}>{item.pages[1]}</Text>
      </View>
      
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <TouchableOpacity>
        <View style={{width:60,height:20,backgroundColor:"pink"}}>
          <Text>{item.Types[0]}</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{width:100,height:20,backgroundColor:"skyblue"}}>
          <Text>{item.Types[2]}</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{width:60,height:20,backgroundColor:"orange"}}>
          <Text>{item.Types[1]}</Text>
        </View>
        </TouchableOpacity>
       </View>
     
      </View>
     
      </View>
      ))}
      </ScrollView>
    </>
  )
}

export default Book2

const styles = StyleSheet.create({})