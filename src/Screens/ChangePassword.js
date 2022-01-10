import React, { useState } from 'react'
import { View ,Text, TextInput, Alert, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'
import Loader from 'react-native-loading-spinner-overlay'
import { priamry } from "../Colors/PrimaryColor"

import baseUrl2 from '../ApisAuth/Baseurl2/BaseUrl2'
import { getUserEmail, getUserName } from './Authservices'
const ChangePassword=(props)=>{
    const {forgotemail,changepassword,placeholdernew,placeholderprivious,resetpassword}= props.route.params
    const [password,setpassword]=useState()
    const [confirmpassword,setConfirmPassword]=useState()
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState();

    const chngpassword=async()=>{
            try {
                // const useremail=await getUserEmail()
                // console.log(useremail)
                
                    setLoading(true)
                    const apiCall = await axios.post(`${baseUrl2}/user/changepassword`,{
                        "email":"kamranayoub658@gmail.com",
                        "newpassword":confirmpassword,
                        "oldpassword":password
                    })
                    setLoading(false)
                    if(apiCall.data.success==true){
                        props.navigation.navigate("Profile")

                    }
                    console.log(apiCall.data)
        }
        catch (err) {
            setLoading(false)
            Alert.alert(JSON.stringify(err))
    }
        

    }
    const Newpassword = async () => {
       
            try {

                if(password!==confirmpassword){
                    Alert.alert("password not matched")
                }else{
            setLoading(true)


                    const apiCall = await axios.post(`${baseUrl2}/forgot-password/resetpassword`, {
                        "email": forgotemail,
                        newpassword:password
                    })
                    setLoading(false)
                   props.navigation.navigate("Login")
                    console.log(apiCall.data)
                }
        }
        catch (err) {
            setLoading(false)
            // if (data.success ===true) {
            //     alert("Please Enter a Valid Email and password ")
            // }
            console.log(JSON.stringify(err))
        }
    }

    return(
        <View style={styles.main}>
            <Loader visible={loading} color="red"/>

            <View style={styles.mainHeader}>
                <Text style={styles.headertxt}>{resetpassword?"Reset Password":"Change Password"}</Text>
            </View>
            <View style={{marginTop:"50%"}}>

        
            <View style={styles.inputCon}>
                <TextInput placeholder={changepassword?placeholderprivious:"Enter Password"} style={styles.input} onChangeText={(password)=>setpassword(password)} value={password}/>
            </View>
            <View style={styles.inputCon}>
                <TextInput placeholder={changepassword?placeholdernew:"Enter Confirm Password"} style={styles.input} onChangeText={(confirmpassword)=>setConfirmPassword(confirmpassword)} value={confirmpassword}/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>changepassword?chngpassword():Newpassword()}>
                <Text style={styles.btntxt}>Submit </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    inputCon:{
        borderWidth:1,
        borderRadius:10,
        width:'90%',
        height:40,
        justifyContent:'center',
        // alignItems:'center',
        marginLeft:20,
        marginBottom:20
        // marginTop:"50%"
    },
    mainHeader:{
        backgroundColor:priamry,
        height:40,
        alignItems:"center",
        justifyContent:"center"
    },
    headertxt:{
        fontSize:16,
        color:"white"
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        backgroundColor:priamry,
        width:'30%',
        height:40,
        borderRadius:10,
        marginTop:10,
        marginLeft:"33%"

    },
    btntxt:{
        color:'white',
        fontSize:16
    }
});
export default ChangePassword