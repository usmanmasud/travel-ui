import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ListingDeteils = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ListingDeteils {id}</Text>
    </View>
  );
};

export default ListingDeteils;
