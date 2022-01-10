// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const save_user_data = async(data,token) => {
    // console.log(JSON.stringify(phone))
   
    const promise=new Promise(async(resolve,reject)=>{
    
        //  await AsyncStorage.setItem('data',JSON.stringify(data));
        //  await AsyncStorage.setItem('userId',JSON.stringify(data?.user?._id));
        //  await AsyncStorage.setItem('token',JSON.stringify(data?.token));
        //  await AsyncStorage.setItem('name',JSON.stringify(data?.name));

        //  await AsyncStorage.setItem('type',JSON.stringify(data?.user?.role));
         save_user_id(data._id);
         save_user_token(token);
         saveEmail(data.email);
         save_phone(data.phone)
         SaveuserProfile(data.profile)
        //  save_user_account_type(data?.user?.role);
         save_user_name(data.name);

        resolve(true)
        
      
    })

    return promise;
   
};
export const logout = async(navigation) => {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('_id');
    navigation.navigate('Login');
}
export const save_user_account_type = async(role) => {
    await AsyncStorage.setItem('type',role);
    return role;a
}
export const get_user_account_type = async() => {
    const acc_type = await AsyncStorage.getItem('role');
    return acc_type;
}
export const get_user_data = async() => {
    const data = await AsyncStorage.getItem('data');
    const parsedUser = JSON.parse(data);
    return parsedUser;
}
export const save_user_token = async(token) => {
    await AsyncStorage.setItem('token',JSON.stringify(token));
}

export const get_user_token = async() => {
    const token = await AsyncStorage.getItem('token');
    return token;
};

export const save_user_id = async(_id) => {
    await AsyncStorage.setItem('_id',JSON.stringify(_id));
};
export const save_user_name = async(name) => {
    await AsyncStorage.setItem('name',JSON.stringify(name));
};

export const saveEmail=async(email)=>{
    await AsyncStorage.setItem('email',JSON.stringify(email))
}
export const SaveuserProfile=async(profile)=>{
    await AsyncStorage.setItem('profile',JSON.stringify(profile))
}
export const getUserProfile=async()=>{
    const userprofile=await AsyncStorage.getItem("profile")
    var parseProfile=JSON.parse(userprofile)
    return parseProfile
}
export const save_phone=async(phone)=>{
    await AsyncStorage.setItem('phone',JSON.stringify(phone))
}
export const getPhone = async () => {
    const phone = await AsyncStorage.getItem("phone");
    var parsephone = JSON.parse(phone);
    return parsephone
}
export const getuserEmail=async()=>{
    const useremail=await AsyncStorage.getItem("email")
    var parseEmail=JSON.parse(useremail)
    return parseEmail
}
export const getUserName = async () => {
    const name = await AsyncStorage.getItem("name");
    var parse = JSON.parse(name);
    return parse
}


 export const getUserId = async () => {
    const user_id = await AsyncStorage.getItem("_id");
    const parsedid = JSON.parse(user_id);
    return parsedid;
}

