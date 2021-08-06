import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";


class CoinsDetailScreen extends Component {

  state = {
    coin: {}
  }
  getSections = (coin) => {
    const sections = [
      {
        title: "Market cap",
        data: [coin.market_cap_usd]
      },
      {
        title: "Volume 24h",
        data: [coin.volume24]
      },
      {
        title: "Change 24h",
        data: [coin.percent_change_24]
      },
    ];
    return sections;
  }
  /*getSymbolIcon = (symbolStr) => {
    if (symbolStr) {
      
      const symbol = symbolStr.toLowerCase().replace("", "-")
      return ``
    }
  }*/
  componentDidMount () {
    const { coin } = this.props.route.params;

    this.props.navigation.setOptions({ title: coin.symbol});
    this.setState({ coin });
  }

  render() {
    const { coin } = this.state;
    return (
      <View>
        <View>
          <Text>{coin.name}</Text>
        </View>
        <SectionList
          sections={this.getSections(coin)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader = {({ section }) => <Text>{section.title}</Text>}
        />
      </View>
    );
  }
}
export default CoinsDetailScreen;