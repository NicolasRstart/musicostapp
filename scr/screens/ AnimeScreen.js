import { View, FlatList } from "react-native";
import TrackCard from "../components/TrackCard";

const animeOST = [
  {
    id: "1",
    title: "Homura – LiSA (Demon Slayer)",
    url: "https://example.com/homura.mp3"
  },
  {
    id: "2",
    title: "New Genesis – Ado (One Piece Film Red)",
    url: "https://example.com/newgenesis.mp3"
  },
  {
    id: "3",
    title: "Sparkle – RADWIMPS (Your Name)",
    url: "https://example.com/sparkle.mp3"
  }
];

export default function AnimeScreen() {
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={animeOST}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TrackCard title={item.title} url={item.url} />
        )}
      />
    </View>
  );
}