import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import AnimeScreen from "../screens/AnimeScreen";
import GameScreen from "../screens/GameScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const user = useSelector(state => state.auth.user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Anime" component={AnimeScreen} />
            <Stack.Screen name="Game" component={GameScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}