/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';
import Book2 from './Book2';
import BookDetail from './BookDetail';
import  {BookItems}  from './BookItems';


const clock_icon = require("../assets/icons/clock_icon.png");
const claim_icon = require("../assets/icons/claim_icon.png");
const point_icon = require("../assets/icons/point_icon.png");
const card_icon = require("../assets/icons/card_icon.png");



const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.contain}>
          <Text style={styles.text}>Good Morning</Text>
          <Text style={styles.text1}>Batricia Salfiora</Text>
        </View>
        <View style={styles.box}>
        
            {/* <View style={{height:20,width:20,backgroundColor:"red",borderRadius:15}}></View> */}
             <Image 
             style={{height:20,width:20}}
             source={clock_icon}
             />
        
          <Text
            style={{
              fontSize: 10,
              fontWeight:"bold",
              alignItems: 'center',
              //justifyContent: 'center',
              //marginBottom: 0,
              marginLeft:20,
            
            }}>
            240 Points
          </Text>
          
        </View>
      </View>
      <View style={styles.box3}>
        <View style={styles.view3}>
          <View style={{flexDirection:"row"}}>
            <Image 
            style={{width:20,height:20,marginTop:20,marginLeft:10}}
            source={claim_icon}
            />
            <Text style={styles.text2}>claim</Text>
          </View>
          <View style={{height: 60, width: 2, backgroundColor: 'red'}} />
          <View>
          <Image 
            style={{width:20,height:20,marginTop:20,marginLeft:10}}
            source={point_icon}
            />
            <Text style={styles.text2}>Get Point</Text>
          </View>
          <View style={{height: 60, width: 2, backgroundColor: 'red'}} />
          <View />
          <View>
          <Image 
            style={{width:20,height:20,marginTop:20,marginLeft:10}}
            source={card_icon}
            />
            <Text style={styles.text2}>My Card</Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 20, marginLeft: 30}}>
        <Text style={{color: 'white', fontSize: 20}}>My Book</Text>
      </View>

      
      {/* <TouchableOpacity> */}
       
      <ScrollView style={styles.img} horizontal={true}>
      {BookItems.map((item,index) => (
        <TouchableOpacity 
        key={index}
        style={styles.img1}
        onPress={()=> navigation.navigate("BookDetail", {
          data: item.id
        })}
        >
          <Image
            source={item.image} 
            resizeMode="contain"
            style={{width: 100, height: 150, borderRadius: 10}}
          />
        </TouchableOpacity>
      
        ))}
        </ScrollView>
      
        {/* </TouchableOpacity> */}
       
     
      <View style={{marginLeft:30,flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Best Seller</Text>
        <Text style={{color:"white",fontSize:20}}>The Latest</Text>
        <Text style={{color:"white",fontSize:20}}>Coming Soon</Text>
      </View>
      <View style={{flex:1}}>
        <Book2/>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text1: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },

  contain: {
    margin: 30,
  },
  box: {
    height: 40,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 30,
    marginLeft: 70,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
  },
  body: {
    flexDirection: 'row',
  },
  box2: {
    width: 20,
    height: 15,
    backgroundColor: 'blue',
    borderRadius: 30,
    marginTop: 10,
    flexDirection:"row"
  },
  box3: {
    backgroundColor: 'pink',
    height: 60,
    width: '90%',
    marginLeft: 10,
    marginRight: 50,
    borderRadius: 20,

  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text2: {
    padding: 20,
    paddingLeft:10,
    color:"black"
  },
  img: {
    flex:2,
    flexDirection: 'row',
    marginTop: 20,
  },
  img1: {
    marginLeft: 10,
  },
});
