import React from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import WatchlistProvider from "./src/Contexts/WatchlistContext";
import { RecoilRoot } from 'recoil'
import HeaderComp from './src/componets/HeaderComp'
import Navigation from './src/config/Navigation';
const App=()=>{
  return(
    <RecoilRoot>
       <WatchlistProvider>
        <View style={styles.container}>
          <HeaderComp></HeaderComp>
          <Navigation/>
          
        {/* <StatusBar style="light" /> */}
        </View>
      </WatchlistProvider>
      </RecoilRoot>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 10,
  },
});
export default App