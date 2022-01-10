import React, { useState } from "react";
import { Icon } from 'react-native-elements'

import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
// import styles from './Style'
// import {SigbUpData} from '../../../ApisAuth/Baseapi/signUpapi'
import { Picker } from '@react-native-picker/picker';
import axios from "axios";
import Loader from 'react-native-loading-spinner-overlay'
// import { save_user_data } from "../Login/Authservices";
import baseUrl2 from "../ApisAuth/Baseurl2/BaseUrl2";
import { priamry } from "../Colors/PrimaryColor";


const SignUp = (props) => {
    const [icon, setIcon] = useState("eye-slash")
    const [hidePassword, setHidePassword] = useState(true)
    const [error, setError] = useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[name,setName]=useState()
    const[contact,setContact]=useState()
    const [isLoading, setLoading] = useState(false);
    // const[arr ,setState]=useState()
    const [data, setData] = useState([]);


 
    const [selectedLanguage, setSelectedLanguage] = useState();
    // const Signup=async()=>{
    //     try{
    //         if (!email) {
    //             alert('Please enter the email address');
    //             return;
    //         }
    //         if (!password) {
    //             alert('Please enter the password');
    //             return;
    //         }
    //         if (!name) {
    //             alert('Please enter the password');
    //             return;
    //         }
    //         if (!contact) {
    //             alert('Please enter the password');
    //             return;
    //         }
    //         setLoading(true)
    //         const apiCall=await axios.post("https://villas-api.herokuapp.com/api/v1/register",{
    //             "email":email,
    //             'password':password,
    //             'name':name,
    //             'contact':contact
    //         })
    //         setLoading(false)
    //         if(apiCall.data.success==true){
             
                
                    
                       
    //                     setLoading(true);
    //                     const loginApiCall = await axios.post(`${baseUrl}login`, {
    //                         "email": email,
    //                         "password": password
    //                     });
    //                     console.log(loginApiCall.data);
            
    //                     if (loginApiCall?.status == 200) {
    //                         save_user_data(loginApiCall?.data, loginApiCall?.data?.token).then((value) => {
    //                             // alert("works")
    //                             setLoading(false);
    //                             if (loginApiCall?.data?.user?.role == 'user') {
    //                                 props.navigation.navigate('HomeTab');
    //                             } else {
    //                                 props.navigation.navigate('Login');
    //                             }
    //                         }).catch((error) => {
    //                             setLoading(false);
            
    //                             alert(JSON.stringify(error))
    //                         })
    //                     } else {
    //                         setLoading(false);
    //                         Alert.alert('something went wrong', JSON.stringify(loginApiCall.data.info.message))
    //                     }
                     
                
                
    //         }
        
    //         console.log("data",apiCall.data)



    //     }
    //     catch(error){
    //         setLoading(false)
    //         if(data.success==true){
    //             ALert.alert("Please Enter a valid Email / Password")
    //         }
            
    //         console.log("DataErorr",data.success)
            
          
            
            

    //             alert(error,JSON.stringify(error))
            


    //     }
    // }
   
    
    
    const Signup = async () => {
        try {
            if (!email) {
                alert('Please enter the email address');
                return;
            }
            if (!password) {
                alert('Please enter the password');
                return;
            }
            if (!name) {
                alert('Please enter the password');
                return;
            }
            if (!contact) {
                alert('Please enter the password');
                return;
            }
            if(checkcode==verfiedCode){
                setLoading(true)
                const apiCall = await axios.post(`${baseUrl2}/register`, {
                    "email": email,
                    'password': password,
                    'name': name,
                    'phone': contact
                })
                console.log(">>>>api",apiCall.data)
                // setLoading(true)
                if (apiCall.data.success == true) {
                    setLoading(true);
                    const loginApiCall = await axios.post(`${baseUrl2}/user/login`, {
                        "email": email,
                        "password": password
                    });
                    console.log("login",loginApiCall?.data?.token);
                    setLoading(false)
                    if (loginApiCall?.status == 200) {
                        save_user_data(loginApiCall?.data.data, loginApiCall?.data?.token).then((value) => {
                            setLoading(false);
                            if (loginApiCall?.data?.success == true) {
                                props.navigation.navigate('HomeTab');
                            } else {
                                props.navigation.navigate('Login');
                            }
                        }).catch((error) => {
                            setLoading(false);
    
                            alert(JSON.stringify(error))
                        })
                    } else {
                        setLoading(false);
                        Alert.alert('something went wrong', JSON.stringify(loginApiCall.data.message))
                    }

                }
    
    
    
    
            }
        }
        catch (error) {
            setLoading(false)
            console.log(error, JSON.stringify(error))



        }
    }
    return (
        <>
            <ScrollView contentContainerStyle={{ paddingBottom: 100, backgroundColor: 'white' }}>
                <View sty={styles.mainContainer}>
            <Loader visible={isLoading} color="red"/>


                    <Image source={require('../assets/offer1.jpg')} style={styles.mainContainerImage} />
                    {/* <Text style={styles.HeaderText}>Wellcome Back!</Text> */}
                    <Text style={styles.HeaderName}>Sign-up</Text>

                    {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

                    <Text style={styles.inputHeader} >Your name</Text>

                    <View style={styles.inputContainer}>

                        <TextInput
                            value={name}
                            onChangeText={(value) =>setName(value)}
                            styleLabel={{ fontWeight: "600" }}
                            style={styles.Textinput}
                        />
                        {/* <View style={styles.inputIcon} >

            <Icon name="check-circle" type="font-awesome-5" color="green" style={{marginRight:5}}/>

        </View> */}
                    </View>
                    <Text style={styles.inputHeader}>Email</Text>

                    <View style={styles.inputContainer}>

                        <TextInput
                            value={email}
                            onChangeText={(value) => setEmail(value)}
                            styleLabel={{ fontWeight: "600" }}
                            style={styles.Textinput}
                        />
                        {/* <View  style={styles.inputIcon}>

            <Icon name="check-circle" type="font-awesome-5" color="green" style={{marginRight:5}}/>

        </View> */}
                    </View>
                    <Text style={styles.inputHeader}>Contect no.</Text>
                    <View style={styles.inputContainer}>
                        <View style={{
                            width: "50%",
                            paddingHorizontal: 20
                        }}>

                            <Picker
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }>
                                <Picker.Item label="Code" value="" />
                                <Picker.Item label="+44 UK" value="+44" />
                                <Picker.Item label="+1 USA" value="+1" />
                                
                                <Picker.Item label="+92 PAK" value="+92" />

                            </Picker>
                        </View>

                        <TextInput
                        placeholder="333 38515 27"
                        keyboardType="number-pad"
                        maxLength={10}
                            value={contact}
                            onChangeText={(value) => setContact(value)}
                            styleLabel={{ fontWeight: "600" }}
                            style={styles.Textinputcon}
                        />

                    </View>
                    <Text style={styles.inputHeader}>Password</Text>

                    <View style={styles.inputContainer}>

                        <TextInput
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            styleLabel={{ fontWeight: "600" }}
                            style={styles.Textinput}
                        />
                        <View style={styles.inputIcon}>

                            <Icon name="eye-slash" type="font-awesome-5" color="black" style={{ marginRight: 5 }} />

                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonBody} onPress={Signup}>
                        <Text style={styles.buttonText}>
                            Sign-up
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.otherAccountContainer}>
                        <Text style={styles.OtherAccountText}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>

                            <Text style={styles.create} >Login</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </>
    );
};
const styles=StyleSheet.create({
    mainContainer:{
        backgroundColor:'white'
        ,padding:10,
        height:"100%"

    },
    mainContainerImage:{
        width: "100%",
         resizeMode: 'cover',
         height: 190,
         
        //  marginLeft:10

    },
    HeaderText:{
        fontWeight:"300",
        fontSize:20,
        marginLeft:30,
        color:"grey"

    },
    HeaderName:{
        fontWeight:"400",
        fontSize:28,
        top:1,
        marginLeft:30,
        color:"darkblue"
    },
    inputHeader:{
        fontWeight:"700",
        fontSize:13,
        top:20,
        marginLeft:30,
        color:"grey"

    },
    inputContainer:{
        top:30, 
        justifyContent: "center",
        paddingHorizontal: 20,
        borderRadius:30,
        backgroundColor:'#dcdcdc',
        width:"90%",
        marginLeft:20,
        flexDirection:'row',
        

        borderWidth:0.5,
        borderColor:"#dcdcdc",
        bottom:10,
        marginBottom:15


    },
    inputIcon:{
        flexDirection:'row',
        // marginLeft:250,
        left:"96%",
        top:16
        ,position:'absolute'

    },
    Textinput:{
        width:'70%'

       
    },
    Textinputcon:{
        width:'60%'


    },
    PasswordinputContainer:{
        flexDirection:'row',top:15

    },
    TextinputPassword:{
        borderWidth:1,

        borderRadius:30,
        borderColor:"grey",
        bottom:10,
        marginBottom:20,
        backgroundColor:'lightgrey',
        width:"90%",
        marginLeft:17


    },
    buttonBody:{
        borderWidth:2,
        borderColor:priamry,
         backgroundColor:priamry,
         justifyContent:"center",
         marginBottom:10,
         width:"90%",
         height:"7%",
         marginLeft:25,
         borderTopRightRadius:30,
         borderBottomLeftRadius:30,
         top:30,
         marginBottom:20



    },
    buttonText:{
        fontSize:25,
        textAlign:"center" 
        ,color:"white"
    },
    forgotText:{
        fontWeight:"500",
        fontSize:15,
        marginBottom:16

    },
    RigisterText:{
        fontWeight:"500",
        fontStyle:"italic", 
        color:"blue",
        fontSize:15,
        marginBottom:30
    },
    otherAccountContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        top:20

    },
    OtherAccountText:{
        color:'grey',
        fontSize:17,
        fontWeight:'400'

    },
    create:{
        color:'darkblue',
        fontSize:20,
        fontWeight:'400'

    },
    
});

export default SignUp;