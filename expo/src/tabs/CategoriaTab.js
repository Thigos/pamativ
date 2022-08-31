import React from 'react';
import { View, FlatList, Text} from 'react-native';
import styles from '../styles/styles';

const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );

export default function CategoriaTab(){
    //DB Request
    var APIURL = "http://192.168.15.34/PamAtiv/categoria-json.php";
    const [data, setData] = React.useState([]);

    var headers = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
    };

    fetch(APIURL,{
    headers: headers
    })
    .then((Response)=>Response.json())
    .then((Response)=>{
        setData(Response);
    })
    .catch((error)=>{
    console.error("ERROR FOUND" + error);
    })

    //FlatList
    const renderItem = ({ item }) => (
        <Item name={item.name} />
    );

    return (
        <View style={styles.container}>
          <FlatList
            style={styles.flatList}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      );
}
