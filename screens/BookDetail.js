/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Home from './Home'
import { BookItems } from './BookItems'

const BookDetail = (route,navigation) => {
  const { data } = route.params;

  

  return (
    <View style={{flex:1}}>
     {/* <Image route={props.route}  image={image} /> */}
     <Text>{data}</Text>
     <Text>Boooook</Text>
    </View>
  )
}

export default BookDetail

const styles = StyleSheet.create({})