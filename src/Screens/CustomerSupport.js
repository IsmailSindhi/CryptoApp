import axios from "axios";
import React from "react";
import {View,Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native'
import baseUrl2 from "../ApisAuth/Baseurl2/BaseUrl2";
import { getUserEmail, getUserId } from "./Authservices";
import Loader from 'react-native-loading-spinner-overlay'
import { priamry } from "../Colors/PrimaryColor";

const CustomerSupport =(props)=>{
    const {CustomerSupport}=props.route.params

    const [title,setTitle]=React.useState();
    const [description,setDescription]=React.useState(); 
    const [loading,setLoading]=React.useState(false);
    const ReportBugg=async()=>{
        const userID = await getUserId();
        try {
            setLoading(true)
           const submitsupportapi=await axios.post(`${baseUrl2}/bugs/report-bug`,{
               "userId":userID,
               "title":title,
               "description":description
           }) 
           setLoading(false)
           if(submitsupportapi.data.success==true){
               props.navigation.navigate("Profile")
           }
   
        } catch (error) {
            Alert.alert(JSON.stringify(error.message))
            
        }
    }
 const submitCustomerSupport=async()=>{
     const userID = await getUserId();
     console.log(userID)
     try {
         setLoading(true)
        const submitsupportapi=await axios.post(`${baseUrl2}/customer-support/create-customer-support`,{
            "userId":userID,
            "title":title,
            "description":description
        }) 
        setLoading(false)
        if(submitsupportapi.data.success==true){
            props.navigation.navigate("Profile")
        }

     } catch (error) {
         setLoading(false)
         Alert.alert(JSON.stringify(error.message))
         
     }
 }
    return(
        <View>
            <Loader visible={loading} color="red"/>

            <View style={styles.mainHeader}>
                <Text style={styles.headertxt}> {CustomerSupport?"Customer Support":"Report bugg"}</Text>
            </View>
            <View style={styles.inputCon}>
                <TextInput placeholder="Enter title" style={styles.inputtitle} onChangeText={(title)=>setTitle(title)} value={title}/>
                <TextInput placeholder="Enter Description" multiline={true} style={styles.inputdesc} onChangeText={(description)=>setDescription(description)} value={description}/>

            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>CustomerSupport?submitCustomerSupport():ReportBugg()}>
                <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles=StyleSheet.create({
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
    inputCon:{
        marginTop:"30%"
        // alignSelf:'center'

    },
    inputtitle:{

    borderWidth:1,
    borderRadius:10,
    width:'90%',
    height:40,
    justifyContent:'center',
    // alignItems:'center',
    marginLeft:20,
    marginBottom:20
},
inputdesc:{

    borderWidth:1,
    borderRadius:10,
    width:'90%',
    // height:140,
    // justifyContent:'center',
    maxHeight:'auto',
    // alignItems:'center',
    marginLeft:20,
    marginBottom:20
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
export default CustomerSupport