import { View, Text } from "react-native";
import React from "react";

type Props = {
  listings: any[];
};

const Listings = ({ listings }: Props) => {
  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;
