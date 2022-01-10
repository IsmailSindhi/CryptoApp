import React, { useState } from "react";
import { Icon } from 'react-native-elements'
import { priamry } from "../Colors/PrimaryColor";

import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
// import styles from './LoginStyle'
import axios from "axios";
import Loader from 'react-native-loading-spinner-overlay'
import { save_user_data } from "./Authservices";
import baseUrl2 from "../ApisAuth/Baseurl2/BaseUrl2";

const Login = (props) => {
    const [icon, setIcon] = useState("eye-slash")
    const [hidePassword, setHidePassword] = useState(true)
    const [error, setError] = useState()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    
    const Login = async () => {
        try {
            if (!email) {
                alert('Please enter the email address');
                return;
            }
            if (!password) {
                alert('Please enter the password');
                return;
            }
            setLoading(true);
            const loginApiCall = await axios.post(`${baseUrl2}/login`, {
                "email": email,
                "password": password
            });
            console.log(loginApiCall.data);

            if (loginApiCall?.status == 200) {
                save_user_data(loginApiCall?.data.user, loginApiCall?.data?.token).then((value) => {
                    setLoading(false);
                    if (loginApiCall?.data?.success == true) {
                        props.navigation.navigate('HomeTab');
                    } else {
                        props.navigation.navigate('Login');
                    }
                }).catch((error) => {
                    setLoading(false);

                    console.log(error,JSON.stringify(error))
                })
            } else {
                setLoading(false);
                
                Alert.alert('something went wrong', JSON.stringify(loginApiCall.data.info.message))
            }
        } catch (e) {
            console.log(e)
            setLoading(false);
            console.log(e, JSON.stringify(e))
        }
    }
    return (
        <>
            <View style={styles.mainContainer}>
            <Loader visible={isLoading} color="red"/>


                <Image source={require('../assets/offer2.jpg')} style={styles.mainContainerImage} />
                <Text style={styles.mainContainerHeader}>Wellcome Back!</Text>
                {/* <Text style={styles.mainContainerHeaderText}>Login</Text> */}

                {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
                <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>

                    <Text style={styles.InputHeader}>Email</Text>

                    <View style={styles.EmailInput}>

                        <TextInput
                            value={email}
                            onChangeText={(value) => setEmail(value)}
                            styleLabel={{ fontWeight: "600" }}
                            style={styles.Textinput}
                        />
                        {/* <View  style={styles.EmailInputIcon}>

                <Icon name="check-circle" type="font-awesome-5" color="green" style={{marginRight:5}}/>

            </View> */}
                    </View>
                    <Text style={styles.InputHeader}>Password</Text>

                    <View style={styles.EmailInput}>

                        <TextInput
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            styleLabel={{ fontWeight: "600" }}
                            style={styles.Textinput}
                        />
                        <View style={styles.EmailInputIcon}>

                            <Icon name="eye-slash" type="font-awesome-5" color="black" style={{ marginRight: 5 }} />

                        </View>
                    </View>
                    <TouchableOpacity style={styles.forgetPassword} onPress={()=>props.navigation.navigate('Forgot')}>
                        <Text style={styles.forgetPasswordText}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBody} onPress={Login}>
                        <Text style={styles.buttonText}>
                            Sign in
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.footerText}>
                        <Text style={styles.socialIconContainer}>or Sign in with</Text>
                    </View>
                    <View style={styles.socialIcon}>
                        <Icon name="google" type="font-awesome-5" size={45} color="red" onPress={() => alert("hello")} />
                        <Icon name="facebook" type="font-awesome-5" size={45} color="blue" onPress={() => alert("hello")} />
                        <Icon name="envelope" type="font-awesome-5" size={45} color="black" onPress={() => alert("hello")} />


                    </View>
                    <View style={styles.otherAccountContainer}>
                        <Text style={styles.OtherAccountText}>Don´t have an account? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>

                            <Text style={styles.create} >Create one</Text>
                        </TouchableOpacity>
                    </View>



                </ScrollView>
            </View>
        </>
    );
};

const styles=StyleSheet.create({
    mainContainer:{
        backgroundColor:'white',
        height:"100%" ,

    },
    mainContainerImage:{
        width: "100%",
         resizeMode: 'cover',
         height: 190,

    },
    mainContainerHeader:{
        fontWeight:"300",
        fontSize:15,
        marginLeft:30,
        color:"grey",
        marginTop:5

    },
    mainContainerHeaderText:{
        fontWeight:"400",
        fontSize:28,
        top:1,
        marginLeft:30,
        color:"darkblue"

    },
    InputHeader:{
        fontWeight:"700",
        fontSize:13,
        top:20,
        marginLeft:30,
        color:"grey"

    },
    passwordHeader:{
        fontWeight:"700",
        fontSize:13,
        marginLeft:27,
        color:"lightgrey"

    },
    PasswordContainer:{
        flexDirection:'row',
        top:15

    },
    EmailInput:{
        top:30, 
        justifyContent: "center",
        paddingHorizontal: 20,
        borderRadius:30,
        backgroundColor:'#dcdcdc',
        width:'90%',
        marginLeft:20,
        borderWidth:0.5,
        borderColor:"#dcdcdc",
        bottom:10,
        marginBottom:20

    },
    EmailInputIcon:{
        flexDirection:'row',
        // ,marginLeft:250,
        left:'98%',
        top:10,
        position:'absolute'

    },
    Textinput:{
        width:"80%"
        
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
    forgetPassword:{
        marginLeft:194,
        top:15

    },
    forgetPasswordText:{
        fontStyle:'italic'
        ,fontSize:17,
        fontWeight:'400',
        color:'darkblue',
        marginBottom:10

    },
    buttonBody:{
        // borderRadius:60,
        borderWidth:2,
        borderColor:priamry,
         backgroundColor:priamry,
         justifyContent:"center",
         marginBottom:10,
         width:"90%",
         height:"13%",
         marginLeft:20,
         borderTopRightRadius:30,
         borderBottomLeftRadius:30,
         top:20



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
    footerText:{
        justifyContent:"center",
        alignItems:'center'
        ,top:20
    },
    socialIconContainer:{
        color:'grey',
        fontSize:19

    },
    socialIcon:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',top:30

    },
    otherAccountContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        top:50

    },
    OtherAccountText:{
        color:'grey',
        fontSize:20,
        fontWeight:'400'

    },
    create:{
        color:'darkblue',
        fontSize:20,
        fontWeight:'400'

    }

});
export default Login;