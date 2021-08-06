import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import Http from "../libs/http";
import CoinsItem from "../components/CoinsItem";
import Colors from "../res/colors";
const axios = require('axios').default;

class CoinsScreen extends Component {

  state = {
    coins: [],
    loading: false
  }
  
  componentDidMount = async() => {
    this.setState({ loading: true});
    let stringRequest = "https://api.coinlore.net/api/tickers/";
    const res = await Http.instance.get(stringRequest);
    this.setState({ coins: res.data, loading: false });
    console.log(res.data);
    //this.state.loadEtiqueta = true;
  };

  handlePress = (coin) => {
    this.props.navigation.navigate('CoinDetail', { coin });
  }
  render() {
    const { coins, loading } = this.state;
    return (
      <View style={styles.container}>
        { loading ?
          <ActivityIndicator 
            style={styles.loader} 
            color="#FFF"
            size="large"
          />
          : null
        }
        <FlatList
          data={coins}
          renderItem={
            ({ item }) => 
            <CoinsItem
              item={item}
              onPress={() => this.handlePress(item)}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    color: "#000",
    textAlign: "center"
  },
  btn:{
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  }


});

export default CoinsScreen;