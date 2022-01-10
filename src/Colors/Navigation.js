import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  Home,
  Payment,
  Pridiction,
  Profile,
  Splash,
  Onboardingui,
  Login ,
  SignUp,
  Setting,
  CustomerSupport,
  FeedBack,
  EditProfile,
  ChangePassword} from '../Screens'
import { Icon } from 'react-native-elements'

import { priamry } from '../Colors/PrimaryColor'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const navigationhandel = () => ({

    headerShown: false
  }
);

const HomeStack = (props) => {
    return (
      <Stack.Navigator initialRouteName="Onboardingui" >
        <Stack.Screen options={navigationhandel} name='HomeTab' component={HomeTab} />
        {/* <Stack.Screen options={navigationhandel} name="Forgot" component={Forgot} /> */}
        {/* <Stack.Screen name="Reset" component={Reset} /> */}
        <Stack.Screen options={navigationhandel} name="Splash" component={Splash} />
        <Stack.Screen options={navigationhandel} name='Login' component={Login} />
        <Stack.Screen options={navigationhandel} name='SignUp' component={SignUp} />
        <Stack.Screen options={navigationhandel} name='Onboardingui' component={Onboardingui} />
        {/* <Stack.Screen options={navigationhandel} name='Verification' component={Verification} /> */}
        <Stack.Screen options={navigationhandel} name='ChangePassword' component={ChangePassword} />
        <Stack.Screen options={navigationhandel} name='Setting' component={Setting} />
        <Stack.Screen options={navigationhandel} name='CustomerSupport' component={CustomerSupport} />
        <Stack.Screen options={navigationhandel} name='FeedBack' component={FeedBack} />
        <Stack.Screen options={navigationhandel} name='EditProfile' component={EditProfile} />

  
  
  
  
  
  
      </Stack.Navigator>
    )
  }

  const HomeTab = () => {
    return (
      <>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Pridiction') {
                iconName = focused ? 'box' : 'box';
              }
              else if (route.name === 'Payment') {
                iconName = focused ? 'comment' : 'comment';
              }
  
              else if (route.name === 'Profile') {
                iconName = focused ? 'user' : 'user';
              }
              return <Icon type="font-awesome-5" name={iconName} size={size} color={color} />;
            },
          })}
          options={{
            activeTintColor: priamry,
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen options={navigationhandel} options={{ tabBarLabel: 'Home', headerShown: false }} name="Home" component={Home} />
          <Tab.Screen options={navigationhandel} options={{ tabBarLabel: 'Services', headerShown: false }} name="Pridiction" component={Pridiction} />
          {/* <Tab.Screen name="Payment" component={Payment} options={{ tabBarLabel: 'Payment', headerShown: false }} /> */}
          <Tab.Screen options={navigationhandel} name="Profile" component={Profile} />
        </Tab.Navigator>
      </>
    )
  }

const Navigation = (props) => {
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    )
  }

export default Navigation