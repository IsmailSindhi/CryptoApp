import React from 'react';
import {Text, View,Image,TouchableOpacity, StyleSheet} from 'react-native';
import { priamry } from '../Colors/PrimaryColor';

import Swiper from 'react-native-swiper'
import AsyncStorage from '@react-native-async-storage/async-storage';

 
const Onboardingui=(props)=>{
  const [isLoading, setLoading] = React.useState(false);

  const checker=async()=>{
    const value = await AsyncStorage.getItem('fristTime');
    if(value){
      props.navigation.navigate("Splash")
    }
    else{
      props.navigation.navigate("Onboardingui")
    }
  }
    React.useEffect(()=>{
      checker();
    },[])
      // return acc_type;
  const onPresser=async(value)=>{
    
    AsyncStorage.setItem("fristTime",JSON.stringify(value))
    props.navigation.navigate("Login")
  }
  return(

     <Swiper style={styles.wrapper} activeDotColor={'darkblue'} showsButtons={false} paginationStyle={styles.pagistio}   >
        
        <View style={styles.slide1}>
          <Image source={require('../assets/logo.png')} style={styles.logoimg}/>
          <Text style={styles.logoName}>Thinkfeat Crypto</Text>
          <Image source={require('../assets/crypto(1).png')} style={styles.img}/>
          <Text style={styles.text}>Pridict Price of Cryptocurrency at your fingertips</Text>
          <TouchableOpacity style={styles.buttonBody} onPress={()=>onPresser(1)}>
            <Text style={styles.buttonText}>Sign-up</Text>
          </TouchableOpacity>
          <View style={styles.dontaccount}>
                  <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")} >
                    <Text style={styles.createOne}>Skip</Text>
                  </TouchableOpacity>
              </View>
        </View>

        <View style={styles.slide2}>
          <Image source={require('../assets/logo.png')} style={styles.logoimg}/>
          <Text style={styles.logoName}>Thinkfeat Crypto</Text>
          <Image source={require('../assets/crypto(2).png')} style={styles.img}/>
          <Text style={styles.text}>Pridict Price of Cryptocurrency at your fingertips</Text>
          <TouchableOpacity style={styles.buttonBody} onPress={()=>onPresser(1)}>
            <Text style={styles.buttonText}>Sign-up </Text>
          </TouchableOpacity>
          <View style={styles.dontaccount}>
                  <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")} >
                    <Text style={styles.createOne}>Skip</Text>
                  </TouchableOpacity>
              </View>
        </View>
        <View style={styles.slide3}>
        <Image source={require('../assets/logo.png')} style={styles.logoimg}/>
          <Text style={styles.logoName}>Thinkfeat Crypto</Text>
          <Image source={require('../assets/crypto(3).png')} style={styles.img}/>
          <Text style={styles.text}>Pridict Price of Cryptocurrency at your fingertips</Text>
          <TouchableOpacity style={styles.buttonBody1} onPress={()=>onPresser(1)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.dontaccount}>
                  <TouchableOpacity onPress={()=>props.navigation.navigate("SignUp")} >
                    <Text style={styles.createOne}>Skip</Text>
                  </TouchableOpacity>
              </View>
        </View>
      </Swiper>

    )
}

const styles=StyleSheet.create({
    wrapper: {

    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    logoName:{
      fontSize:26,
      fontWeight:'bold'

    },
    logoimg:{
      width:"25%",
      resizeMode:'contain',
      height:'20%'
      // marginHorizontal:10

    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    text: {
      color: 'darkblue',
      fontSize: 20,
      width:340,
      fontWeight: 'bold',
      textAlign:'center'
    },
    pagistio:{
      marginVertical:80,
      // marginBottom:10
    },
    buttonBody:{
      borderWidth:2,
      borderColor:priamry,
       backgroundColor:priamry,
       justifyContent:"center",
       marginBottom:10,
       width:"90%",
       height:"8%",
       marginLeft:2,
       borderRadius:30,
       top:48,
       position:"relative"
  
  
  
  },
  buttonBody1:{
    borderWidth:2,
    borderColor:priamry,
     backgroundColor:priamry,
     justifyContent:"center",
     marginBottom:10,
     width:"90%",
     height:"8%",
     marginLeft:2,
     borderRadius:30,
     top:38,
     position:"relative"



},
  buttonText:{
      fontSize:25,
      textAlign:"center" 
      ,color:"white"
  },
  img:{
    width: "90%",
   resizeMode: 'contain',
   height: "40%"

  },
    dontaccount:{
        flexDirection:'row',justifyContent:'center',alignItems:'center'
        ,top:40,
        marginLeft:"70%"
    },
    dontaccountText:{
        color:'lightgrey',fontSize:17
    },
    createOne:{
        color:'darkblue',fontSize:17
    }
});
  export default Onboardingui
 