import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { View,Text,Image, Alert } from 'react-native'

const Splash =(props)=>{
    const [hideSplash, setHideSplash] = React.useState(true);

    React.useEffect(async() => {
        setTimeout(() => {
        }, 2000)
        try {
            const value = await AsyncStorage.getItem('token');
            if (value == null) {
              props.navigation.navigate("Login")
            }
            else{
                props.navigation.navigate("HomeTab")
                
            }
          } catch (error) {
              console.log(error)
            // Error retrieving data
          }        
        
        
      
    //   props.navigation.navigate("HomeTab") 
    }, [hideSplash]);

    return(
        <View style={{alignSelf:'center',marginTop:"30%"}} >
                <Image source={require('../assets/logo.png')}  />
            
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:"4%"}}>
                Wellcome to Thinkfeat Crypto Pridiction
            </Text>
        </View>
    )
}
export default Splash