import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, Alert, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import { getPhone, getuserEmail, getUserId, getUserName, getUserProfile } from './Authservices'
import { priamry } from '../Colors/PrimaryColor'
import axios from 'axios'
import baseUrl2 from '../ApisAuth/Baseurl2/BaseUrl2'
import Loader from 'react-native-loading-spinner-overlay'

const EditProfile = () => {
    const [userName, setUserName] = React.useState()
    const [UserEmail, setUserEmail] = React.useState()
    const [name,setName]=React.useState()
    const [getphonenbr,setGetPhonenbr]=React.useState()
    const [Phone,setPhone]=React.useState()
    const [profile,setProfile]=React.useState()
    const [userid,setuserid]=React.useState()


    const [loading,setLoading]=React.useState(false)
    // console.log(userId)
    const UpdateProfile=async()=>{
        const userId=await getUserId();
        try {
            setLoading(true)
            const updateapi=await axios.patch(`${baseUrl2}/user/edit-profile`,{
                "phone":Phone,
                "name":name,
                "userId":userId
            })
            setLoading(false)
            if(updateapi.data.success==true){
                alert(updateapi.data.message,
        
        
        {text: 'Ok', onPress: props.navigation.navigate('Setting')},
        {text: 'Cancel'},
        
        {cancelable: false}
    )
            }
            console.log(updateapi)

            
        } catch (error) {
            setLoading(false)
            console.log(error,JSON.stringify(error))
            
        }

    }

    const getuser = async () => {

        const name = await getUserName();
        setUserName(name)
        const emailuser = await getuserEmail();
        setUserEmail(emailuser)
        const phonenbr=await getPhone();
        setGetPhonenbr(phonenbr)
        const userprofile=await getUserProfile();
        // alert(userprofile)
        setProfile(userprofile)

    }
    console.log(profile)
    React.useEffect(() => {
        getuser();
        
    }, [])
    return (
        <View>
            <Loader visible={loading} color="red"/>

            <View style={styles.contectCon}>
                <View style={styles.contectdtl}>
                    <Text style={styles.emialtitle}>Email</Text>
                    <Text style={styles.email}>{UserEmail}</Text>

                </View>
                <View style={styles.contectdtl}>
                    <Text style={styles.title}>Name</Text>
                    <TextInput placeholder={userName} placeholderTextColor={'black'} onChangeText={(name)=>setName(name)} value={name} style={name ? styles.input : styles.placeholder}/>
                </View>
                <View style={styles.contectdtl}>
                    <Text style={styles.title}>Contect NBR</Text>
                    <TextInput placeholder={getphonenbr}  placeholderTextColor={'black'} style={Phone ? styles.input : styles.placeholder} onChangeText={(Phone)=>setPhone(Phone)} value={Phone}/>
                </View>
            </View>
            <TouchableOpacity style={styles.btnprofile} onPress={()=>userName==name&&getphonenbr==Phone?alert("No changes"):UpdateProfile()}>
                <Text style={styles.btnprofiletxt}>Update Profile</Text>
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
    editprofile:{
        width:149,
        flexDirection:"row",
        height:40,
        marginTop:10,
        borderRadius:30,
        justifyContent:"space-between",
        padding:10,
        backgroundColor:priamry,
        alignSelf:"center"
     
    },
    editprfiletxt:{
        color:"white",
        fontSize:16
    },
    changePasswordbtn:{
        justifyContent:'center',
        marginTop:20,
        backgroundColor:priamry,
        width:"40%",
        height:30,
        borderWidth:0.5,
        borderRadius:30,
        alignItems:'center'
    },
    btncon:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginHorizontal:20
    },changePasswordbtn:{
        justifyContent:'center',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',


        // backgroundColor:priamry,
        // width:"40%",
        height:30,
        // borderWidth:0.5,
        borderRadius:30,
        alignItems:'center'
    },
    btncon:{
        // flexDirection:"row",
        justifyContent:'space-between',
        marginHorizontal:20
    },
    changePasswordbtntxt:{
        color:'grey',
        fontWeight:"800",
        marginLeft:20
    },
    profileImageContainer:{
        alignSelf:'center',
        // marginTop:30,
        padding:10,
        flexDirection:'row'

    },
    profileImage:{
        width: 100,
        height: 100,
        borderRadius:100/2,
        resizeMode: 'cover',
        
       
    },
    upldbtn:{
        alignSelf:'center',
        backgroundColor:priamry,
        width:"40%",
        height:30,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',

    },
    hidden:{
        display:'none'

    },
    upldbtntxt:{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },

    profileImageicon:{
        width: 100,
        borderRadius:100/2,
        justifyContent:'center',
        alignItems:'center',
        height: 100,
        resizeMode: 'cover',
        // borderRadius:20,
        backgroundColor:'lightgrey'
    },
    profileName:{
        alignSelf:'center'
    },
    cameraIcon:{
        flexDirection:'row',
        top:10,
        right:20
    },
    userprofile:{
        alignSelf:'center'
    },
    userName:{
        color:priamry,
        alignSelf:'center',
        fontSize:20
    },
    prefrences:{
        backgroundColor:'lightgrey',
        marginTop:10,
        height:30
    },
    prefrencestxt:{
        fontSize:20,
        color:"grey",
        alignItems:"center",
        marginLeft:30,
        fontWeight:'600'
    },
    contectCon:{
        marginLeft:30,
        marginTop:20
    },
    contectdtl:{
        marginBottom:10

    },
    emialtitle:{
        fontSize:14,
        color:"grey",
    },
    email:{
        fontSize:16,
        fontWeight:"600",
        color:"black",
        marginBottom:10

    },
    title:{
        fontSize:16,
        color:priamry
    },
    placeholder:{
        fontSize:16,
        fontWeight:"600"
    },
    btnprofile:{
        width:"60%",
        height:40,
        marginTop:"20%",
        backgroundColor:priamry,
        alignSelf:"center",
        alignItems:'center',
        justifyContent:"center"
    },
    btnprofiletxt:{
        color:"white",
        fontSize:16,
        fontWeight:"600"
    },
    container: {
        // flex: 1,
      },
      scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
});
export default EditProfile