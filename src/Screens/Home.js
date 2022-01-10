import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View, Text, StyleSheet } from "react-native";
import CoinItem from "../componets/CoinItem";
// import HeaderComp from "../componets/HeaderComp";
import { getMarketData } from "../services/requests";

const Home = ({ navigation }) =>{
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchCoins = async (pageNumber) => {
      if (loading) {
        return;
      }
      setLoading(true);
      const coinsData = await getMarketData(pageNumber);
      setCoins((existingCoins) => [...existingCoins, ...coinsData]);
      setLoading(false);
    };
  
    const refetchCoins = async () => {
      if (loading) {
        return;
      }
      setLoading(true);
      const coinsData = await getMarketData();
      setCoins(coinsData);
      setLoading(false);
    };
  
    useEffect(() => {
      fetchCoins();
    }, []);
  
    return (
        // <Text>Home</Text>
      <View style = {{backgroundColor: "#121212"}}>
    
        <Text style={{ fontFamily: 'DroidSans', color: "white", fontSize: 25, letterSpacing: 1, paddingHorizontal: 20, paddingBottom: 5,textAlign:'center' }}>Crypto Assets</Text>
        <FlatList
          data={coins}
          renderItem={({ item }) => <CoinItem marketCoin={item} />}
          onEndReached={() => fetchCoins(coins.length / 50 + 1)}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              tintColor="white"
              onRefresh={refetchCoins}
            />
          }
        />
      </View>
    )
}


export default Home;