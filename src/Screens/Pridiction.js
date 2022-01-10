//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";



const Pridiction = () => {
    const [country, setCountry] = useState('Select Cryptocrunncy');
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={styles.container}>
            <Text> Select Cryptocurrency</Text>
            <Picker
                style={styles.picker}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        text: {
            fontSize: 24,
        },
        picker: {
            marginVertical: 30,
            width: 300,
            height: 45,
            padding: 10,
            borderWidth: 2,
            borderColor: "#fff",
        },
    },

});

export default Pridiction;
