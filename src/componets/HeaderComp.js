//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import imagePath from '../constants/imagePath';

// create a component
const HeaderComp = () => {
    return (
        <View style={styles.container}>
            <Image style = {styles.logo} source={imagePath.icLogo}></Image>
            <Text style = {styles.name}>CRYPTO PRIDICTOR </Text>
            <Text></Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#393D46',
        alignItems: 'center'
    },
    name:{
        fontSize: 28,
        color: "white",
        fontFamily: 'DroidSans',
        marginLeft: 8,
        letterSpacing: 1
    },
    logo:{
      marginLeft: 15,
      
    },
});

//make this component available to the app
export default HeaderComp;
