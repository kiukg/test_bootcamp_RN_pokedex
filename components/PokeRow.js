import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const PokeRow = ({ name, imgUrl, number, navigation }) => {
  return (
    // <Fragment></Fragment>
    <TouchableOpacity 
        style={{ backgroundColor: "transparent" }}
        onPress={() => navigation.navigate('PokeInfo',{pokemonId:number})}
    >
      <View style={styles.listItemContainer}>
        <Image source={{ uri: imgUrl }} style={styles.pokeImage} />
        <View style={styles.listRowContainer}>
          <Text style={styles.pokeItemHeader}>{name}</Text>
          <Text style={styles.pokeItemNumber}>N° {number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: "solid",
    borderColor: "#eee",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: "#eaeaea",
  },
  listRowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor:'transparent',
    color:'white'
  },
  pokeItemNumber: {
    
    fontSize: 12,
    alignSelf: "center",
    color:'white'
  },
  pokeItemHeader: {
    color:'white',
    fontSize: 24,
    alignSelf: "center"
  },
  pokeImage: {
    backgroundColor: "white",
    height: 70,
    width: 70,
    borderRadius:30
  }
});

export default PokeRow;
