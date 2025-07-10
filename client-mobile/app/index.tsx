import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/about">About</Link>

      <Image
        source={require("@/assets/images/react-logo.png")}
        style={{ width: 200, height: 200 }}
      />
      <View>
        <Text>Hello World</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
  },
  heading: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
});
