/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable no-shadow */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import Items from './data.json';



const AxiosTest = ({navigation}) => {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState("");
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // const AxiosTest = async () => {
  //   await axios.post("https://jsonplaceholder.typicode.com/posts"),{Items}
  //   .then(res => {
  //     console.log("---------------------hi>",res.data)
  //   }).catch(err => console.log(err));
  // }
  
  return (
    <View>
      <ScrollView>
        <View>
          <TextInput style={{fontWeight:"700",color:"white",backgroundColor:"pink"}}
                placeholder='search by Title'
                onChangeText={(obj)=>setSearch(obj)}
          />
        </View>
        <DataTable.Header>
          <DataTable.Title >ID</DataTable.Title>
          <DataTable.Title numeric>TITLE</DataTable.Title>
          <DataTable.Title numeric>BODY</DataTable.Title>
        </DataTable.Header>
          {data.filter((data) => {
              if (search === '') {
                return data;
              } else if (data.title.toLowerCase().includes(search.toLowerCase())) {
                return data;
              }
            }).map((data,index) => (
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <DataTable>
                  <DataTable.Row key={index}>
                    <DataTable.Cell>{data.id}</DataTable.Cell>
                    <DataTable.Cell numeric>{data.title}</DataTable.Cell>
                    <DataTable.Cell numeric>{data.body}</DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </TouchableOpacity>  
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default AxiosTest;

// const styles = StyleSheet.create({});
