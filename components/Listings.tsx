import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListingType } from "@/types/ListingType";
import Colors from "@/constant/Colors";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {
  listings: any[];
  category: string;
};

const Listings = ({ listings, category }: Props) => {
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    console.log("updtw");
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 200);
  }, [category]);

  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      //@ts-ignore
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.bookmark}>
              <Ionicons
                name="bookmark-outline"
                size={20}
                color={Colors.white}
              />
            </View>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text style={styles.itemLocationText}>{item.location}</Text>
              </View>
              <Text style={styles.itemPriceText}>${item.rating}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: { width: 200, height: 200, borderRadius: 10, marginBottom: 30 },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocationText: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceText: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
});
