import { View, Text, Button } from "react-native";
import { Audio } from "expo-av";

export default function TrackCard({ title, url }) {
  const playSound = async () => {
    const sound = new Audio.Sound();
    await sound.loadAsync({ uri: url });
    await sound.playAsync();
  };

  return (
    <View>
      <Text>{title}</Text>
      <Button title="Play" onPress={playSound} />
    </View>
  );
}