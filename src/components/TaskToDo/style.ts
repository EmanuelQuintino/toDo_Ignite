import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    width: "100%",
    backgroundColor: "#262626",
    borderRadius: 8,
    height: 64,
    paddingHorizontal: 18,
    marginBottom: 8,
  },

  text: {
    color: "#f2f2f2",
    fontSize: 14,
    flexWrap: "wrap",
  },

  textChecked: {
    color: "#808080",
    fontSize: 14,
    flexWrap: "wrap",
    textDecorationLine: "line-through"
  },

  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});