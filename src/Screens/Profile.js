import React from 'react'
import {View,Text,Image,StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import { getUserEmail, getUserName, logout } from './Authservices'
// import styles from './ProfileStyle'
import ImagePicker from 'react-native-image-crop-picker'
import { priamry } from "../Colors/PrimaryColor";

const Profile =(props)=>{
    const [images, setImages] = React.useState()
    const [userName, setUserName] = React.useState()
    const [email, setEmail] = React.useState()
    const [Logoutuser, setLogout] = React.useState()

    const getuser=async()=>{
        
        const name= await getUserName();
        setUserName(name)
    }
    const Logoutuser1=async()=>{
        const Logout=await logout();
        setLogout(Logout)
    }
    const getuseremail=async()=>{
        
        
        const nameemail= await getUserEmail();
        // setUserName(name)
        setEmail(nameemail)
    }
    console.log(email)

    React.useEffect(() => {
        getuser();
        getuseremail();
    }, [])
 
    return(
        <>
            <View style= {styles.nameContainer}>
                <Text style={styles.userName}> Hi</Text>  
                <Text></Text>
                <Text style={styles.userName}>{userName}</Text>  

            </View>
            <View style = {styles.iconContainer}>

        <View style={styles.cardContainer} >
            <TouchableOpacity style={styles.card} onPress={()=>props.navigation.navigate("Setting")}>
                <Icon name="cog" type="font-awesome-5" color="white" size={30}   />
                <Text style={styles.cardText}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}  onPress={()=>props.navigation.navigate("CustomerSupport",{CustomerSupport:true,})} >
                <Icon name="info-circle" type="font-awesome-5" color="white" size={30} />
                <Text style={styles.cardText} >Customer help</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cardContainer} >
            <TouchableOpacity style={styles.card} onPress={()=>props.navigation.navigate("FeedBack")}>
                <Icon name="clone" type="font-awesome-5" color="white" size={30}  />
                <Text style={styles.cardText}>Provide feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}  onPress={Logoutuser1}>
                <Icon name="sign-out-alt" type="font-awesome-5" color="white" size={30}  />
                <Text style={styles.cardText}>Signout</Text>
            </TouchableOpacity>
        </View>
        </View>

        </>
    )
}
const styles=StyleSheet.create({
    iconContainer: {
        position: 'relative',
        marginTop: '30%'
    },
    nameContainer:{
        position: 'relative',
        marginTop: '10%'
    },
    backContainer:{
        display:"flex",
        flexDirection:"row",
        top:30
    },
    backContainerText:{
        marginLeft:40,
        top:10,
        fontSize:16,
        color:'grey'

    },
    cameraIcon:{
        flexDirection:'row',
        top:10,
        right:20
    },
    userName:{
        color:priamry,
        alignSelf:'center',
        fontSize:36

    },
    orderContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginLeft:10
        
    },
    orderHeader:{
        color:"lightgrey",
        fontSize:16,
        fontWeight:'600',
        marginLeft:1,width:110
    },
    profileDevideText:{
        color:"grey",
        fontSize:60,
        fontWeight:'800',
        marginLeft:10
    },
    completeorderText:{
        color:"lightgrey",
        fontWeight:'600'
        ,fontSize:16,
        width:'40%',
        marginLeft:10
    },
    cardText:{
        color:'white',
        fontWeight:'600',fontSize:16,
        marginBottom:1,
        top:5

    },
    profileImageContainer:{
        alignSelf:'center',
        marginTop:30,
        borderRadius:20,
        flexDirection:'row'

    },
    profileImage:{
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius:20,
        
       
    },
    profileImageicon:{
        width: 100,
        justifyContent:'center',
        alignItems:'center',
        height: 100,
        resizeMode: 'cover',
        borderRadius:20,
        backgroundColor:'lightgrey'
    },
    profileName:{
        alignSelf:'center'
    },
    profileorder:{
        alignSelf:'center',
        padding:30,
        flexDirection:'row',
    },
    
    
    card:{
        backgroundColor:priamry,
        borderRadius:30,
        width:"40%",
        height:120,
        justifyContent:'center',
        alignItems:'center',
        // marginLeft:20
     
    },
    cardContainer:{
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:1,
        // alignSelf:'center',
        marginHorizontal:30,
    }

});
export default Profile