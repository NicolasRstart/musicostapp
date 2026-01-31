import { View, FlatList } from "react-native";
import TrackCard from "../components/TrackCard";

const gameOST = [
  {
    id: "1",
    title: "Devil Trigger – Devil May Cry 5",
    url: "https://example.com/deviltrigger.mp3"
  },
  {
    id: "2",
    title: "Hopes and Dreams – Undertale",
    url: "https://example.com/hopesdreams.mp3"
  },
  {
    id: "3",
    title: "Sealed Vessel – Hollow Knight",
    url: "https://example.com/sealedvessel.mp3"
  }
];

export default function GameScreen() {
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={gameOST}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TrackCard title={item.title} url={item.url} />
        )}
      />
    </View>
  );
}