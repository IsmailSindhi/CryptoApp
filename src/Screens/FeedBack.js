import axios from "axios";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import baseUrl2 from "../ApisAuth/Baseurl2/BaseUrl2";
import { getUserEmail, getUserId } from "./Authservices";
import Stars from 'react-native-stars';
import { Icon } from "react-native-elements";
import Loader from 'react-native-loading-spinner-overlay'
import { priamry } from "../Colors/PrimaryColor";

const FeedBack = (props) => {

    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [stars,setStars]=React.useState()
    const Feedbackcall = async () => {
        const userID = await getUserId();
        alert(userID)
        try {
            setLoading(true)
            const feedbackapi = await axios.post(`${baseUrl2}/give-feedback/create-feedback`, {
                "stars": stars.stars,
                "review": title,
                "userId": userID
            })
            setLoading(false)
            if (feedbackapi.data.success == true) {
                props.navigation.navigate("Profile")
            }

        } catch (error) {
            Alert.alert(JSON.stringify(error.message))

        }
    }
    console.log(stars)

    return (
        <View>
            <Loader visible={loading} color="red"/>

            <View style={styles.mainHeader}>
                <Text style={styles.headertxt}>Feed Back</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Stars
                    default={2.5}
                    update={(val)=>setStars({stars: val})}
                    count={5}
                    half={true}
                    starSize={50}
                    fullStar={<Icon name={'star'} type="font-awesome-5" size={25} color={'yellow'} style={[styles.myStarStyle]} />}
                    emptyStar={<Icon name={'star'} type="font-awesome-5" style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                    halfStar={<Icon name={'star-half-alt'} type="font-awesome-5" style={[styles.myStarStyle]} />}
                />
            </View>
            <View style={styles.inputCon}>
                <TextInput placeholder="Enter title" style={styles.inputtitle} onChangeText={(title) => setTitle(title)} value={title} />
                <TextInput placeholder="Enter Description" multiline={true} style={styles.inputdesc} onChangeText={(description) => setDescription(description)} value={description} />

            </View>
            <TouchableOpacity style={styles.btn} onPress={Feedbackcall}>
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
},
myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'yellow',
  }



});

export default FeedBack