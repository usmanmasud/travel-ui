import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ListingType } from "@/types/ListingType";
import Colors from "@/constant/Colors";

const GroupListings = ({ listings }: { listings: ListingType[] }) => {
  const renderItem: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "600",
          color: Colors.black,
          marginBottom: 10,
        }}
      >
        Top Travel Groups
      </Text>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    marginVertical: 20,
  },
});
