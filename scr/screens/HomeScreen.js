import { View, Text, Button } from "react-native";
import * as Location from "expo-location";
import { useState } from "react";

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    }
  };

  return (
    <View>
      <Button title="Anime OST" onPress={() => navigation.navigate("Anime")} />
      <Button title="Game OST" onPress={() => navigation.navigate("Game")} />
      <Button title="Get Location" onPress={getLocation} />
      {location && <Text>{location.latitude}</Text>}
    </View>
  );
}