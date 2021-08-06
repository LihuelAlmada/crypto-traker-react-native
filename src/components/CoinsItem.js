import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../res/colors";

const CoinsItem = ({ item, onPress }) => {
  return (
    <Pressable onPress={onPress} styles={styles.container}>
      <View styles={styles.row}>
        <Text style={styles.symbolText}>{item.name}</Text>
        <Text style={styles.nameText}>{item.symbol}</Text>
      </View>
      <View styles={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        <Text style={styles.percentText}>{item.price_usd}</Text>
      </View>
    </Pressable>
  );
}
// style={percent_change_1h > 0 ? styles.rowGreen : styles.rowRed}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    paddingLeft: 5,
    marginLeft: 5,
  },
  row: {
    flexDirection: "row"
  },
  symbolText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: "#fff",
    fontSize: 14,
  },
  percentText: {
    color: '#fff',
    fontSize: 12,
  },
  priceText: {
    color: "#fff",
    fontSize: 14,
    marginRight: 12,
  }
})
export default CoinsItem;