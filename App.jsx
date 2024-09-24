import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskBar}>
        <TextInput
          placeholder="Añade una tarea"
          style={{
            width: 200,
            borderRadius: 50,
            backgroundColor: "white",
            height: "auto",
          }}
        />
        <Button title="+" color="green" />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  taskBar: {
    flexDirection: "row",
    gap: 10,
  },
});
