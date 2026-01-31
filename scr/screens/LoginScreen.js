import { View, TextInput, Button } from "react-native";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    dispatch(login(res.user));
  };

  const handleRegister = async () => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(login(res.user));
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}