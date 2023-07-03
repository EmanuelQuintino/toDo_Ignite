import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  input: {
    backgroundColor: "#262626",
    color: "#f2f2f2",
    borderRadius: 8,
    height: 56,
    padding: 16,
    fontSize: 18,
    flex: 1,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#f2f2f2",
    fontSize: 24,
  },
});