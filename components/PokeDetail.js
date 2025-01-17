import React from 'react';
import { View, Image, StyleSheet, FlatList,Text,Dimensions }  from 'react-native';

const heightF = Dimensions.get('window').height; 
const imgContainerHeight = (heightF/4);

const PokeDetail = ({number,name,types,imgUrl,height,weight,moves})=>{
    return (
        <View style={styles.pokeDetailContainer}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: imgUrl }} style={{height:imgContainerHeight,width:imgContainerHeight}} ></Image>
            </View>
            <View style={styles.pokeStatistics2}>
                <View style={styles.pokeTypes} >
                    <Text style={styles.pokeName}>{name}</Text>
                </View>
                <View style={styles.pokeTypes} >
                    {types}
                </View>
            </View>
           
            <View style={styles.pokeStatistics}>
                <View style={styles.pokeItem} >
                    <Text style={styles.pokeText}>N. {number}</Text>
                </View>
                <View style={styles.pokeItem}>  
                    <Text style={styles.pokeText}>Height : {height}</Text>
                </View>
                <View style={styles.pokeItem}>  
                    <Text style={styles.pokeText}>Weight : {weight}</Text>
                </View>
            </View>
            <View style={styles.pokeMoves}>

                <View style={styles.pokeMovesTitle}>
                    <View style={styles.pokeItem3} >
                        <Text style={styles.pokeText2}>Move</Text>
                    </View>
                    <View style={styles.pokeItem3} >
                        <Text style={styles.pokeText2}>Level learned at</Text>
                    </View>
                    <View style={styles.pokeItem3} >
                        <Text style={styles.pokeText2}>learn method</Text>
                    </View>
                </View>
                <View style={styles.pokeItem2}>
                <FlatList
                    data={moves}
                    keyExtractor={item => item.move.name}
                    renderItem={data => 
                        {
                            return <View style={styles.pokeStatistics3}>
                                <View style={styles.pokeItem3}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={1} minimumFontScale={0.01} style={styles.pokeText2}>{data.item.move.name}</Text>
                                </View>
                                <View style={styles.pokeItem3}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={1} minimumFontScale={0.01} style={styles.pokeText2}>{data.item.version_group_details[0].level_learned_at}</Text>
                                </View>
                                <View style={styles.pokeItem3}>
                                    <Text adjustsFontSizeToFit={true} numberOfLines={1} minimumFontScale={0.01} style={styles.pokeText2}>{data.item.version_group_details[0].move_learn_method.name}</Text>
                                </View>
                            </View>
                        }
                    }
                >
                </FlatList>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  
    pokeDetailContainer:{
        flex: 1,
        alignSelf: 'stretch',
        flexGrow: 1,
        backgroundColor:'#2a75bb',
    },
    imgContainer:{
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          marginHorizontal: 0,
          alignItems:'center',
          width: imgContainerHeight,
          height:imgContainerHeight,
          backgroundColor:'#fff',
          borderRadius:imgContainerHeight,
          marginTop:5
    },
    pokeStatistics:{
        alignSelf: 'stretch',
        flexDirection:'row',
        justifyContent:'space-between',
        height:45,
        backgroundColor:'#d32734',
    },
    pokeStatistics3:{
        alignSelf: 'center',
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#435f8c',
    },
    pokeStatistics2:{
        alignSelf: 'stretch',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        height:40,
        marginTop:5,
        marginBottom:5,
        padding:15,
    },
    pokeMoves:{
        alignSelf: 'stretch',
        backgroundColor:'#7c97c2',
        padding:5,
        flex:1
    },
    pokeTypes:{
        alignSelf: 'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:70,
    },
    pokeItem:{
        margin:5,
        fontSize:20,
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:5,
        padding:5,
    },
    pokeItem3:{
        flex: 1,
        borderBottomColor: 'white',
        borderBottomWidth:1,
    },
    pokeItem2:{
        flex: 1,
        alignSelf: 'stretch',
        padding:5,
        margin:5,
        marginTop:0,
    },
    pokeMovesTitle:{
        alignSelf: 'stretch',
        padding:5,
        margin:5,
        marginBottom:0,
        flexDirection:'row',
        flexGrow:0,
        height:40
    },
    pokeName:{
        alignSelf: 'center',
        justifyContent:'center',
        fontSize:25,
        margin:15,
        color:'#fff',
        padding:5,
    },
    pokeText:{
        color:'#fff',
    },
    pokeText2:{
        color:'#fff',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:12
    }
});

export default PokeDetail;