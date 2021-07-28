import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Http from "../libs/http";

class CoinsScreen extends Component {

  state = {
    coins: []
  }

  componentDidMount = async() => {
    const res = await Http.instance.get('https://api.coinlore.net/api/tickers/');

    this.setState({ coins: res.data });
  }

  handlePress = () => {
    this.props.navigation.navigate('CoinDetail')
  }
  render() {
    const { coins } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={coins}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
  }

});

export default CoinsScreen;