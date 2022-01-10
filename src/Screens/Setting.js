import React,{useState} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { priamry } from "../Colors/PrimaryColor"

import { getuserEmail, getUserName } from './Authservices'

const Setting = (props) => {
    const [userName, setUserName] = useState()
    const [UserEmail, setUserEmail] = React.useState()


    const getuser = async () => {

        const name = await getUserName();
        setUserName(name)
        const emailuser = await getuserEmail();
        setUserEmail(emailuser)

    }
    React.useEffect(() => {
        getuser();
    }, [])
    return (
        <View>
            
            <View style={styles.userprofile}>
                <View>
                <Text style={styles.userName}>{userName}</Text>
                <Text style={styles.userName}>{UserEmail}</Text>

                </View>

                <TouchableOpacity style={styles.editprofile} onPress={()=>props.navigation.navigate("EditProfile")}>
                    <Text style={styles.editprfiletxt}>Edit Profile</Text>
                    <Icon type="font-awesome-5" name="chevron-right" size={20} color={'white'} />
                </TouchableOpacity>
            </View>
            <View >
                <View style={styles.prefrences}>
                    <Text style={styles.prefrencestxt}>Prefrences</Text>

                </View>
                <View style={styles.btncon}>
                <TouchableOpacity style={styles.changePasswordbtn} >
                <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-around"}}>
                    <Icon type="font-awesome-5" name="globe" size={20} color={'grey'} />
                        <Text style={styles.changePasswordbtntxt} style={styles.changePasswordbtntxt}>Language</Text>

                        </View>
                        <Icon type="font-awesome-5" name="chevron-right" size={20} color={'grey'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.changePasswordbtn} onPress={() => props.navigation.navigate("ChangePassword", { changepassword: true, placeholdernew: "Enter New password", placeholderprivious: "Enter your Previous passowd", resetpassword: false })}>
                    <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-around"}}>
                    <Icon type="font-awesome-5" name="lock-open" size={20} color={'grey'} />
                        <Text style={styles.changePasswordbtntxt} style={styles.changePasswordbtntxt}>Change Password</Text>

                        </View>
                        <Icon type="font-awesome-5" name="chevron-right" size={20} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.changePasswordbtn} onPress={() => props.navigation.navigate("CustomerSupport", { CustomerSupport: false, })}>
                        <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-around"}}>
                    <Icon type="font-awesome-5" name="bug" size={20} color={'grey'} />
                        <Text style={styles.changePasswordbtntxt} style={styles.changePasswordbtntxt}>Report  Bugg</Text>

                        </View>
                        <Icon type="font-awesome-5" name="chevron-right" size={20} color={'grey'} />
                    
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={styles.mainHeader}>
                <Text style={styles.headertxt}>Settings</Text>
            </View> */}

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
        borderRadius:10/2,
        height: 100,
        resizeMode: 'cover',
        
       
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
    container: {
        flex: 1,
      },
      scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
export default Setting