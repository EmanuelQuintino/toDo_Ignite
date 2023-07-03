import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    width: "100%",
  },

  main: {
    padding: 24,
    marginTop: -52,
  },

  box: {
    marginTop: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  boxTotalToDos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },

  created: {
    color: "#4ea8de",
    fontWeight: "bold",
    fontSize: 18,
  },

  completed: {
    color: "#8284fa",
    fontWeight: "bold",
    fontSize: 18,
  },

  total: {
    color: "#d9d9d9",
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 100,
    paddingHorizontal: 12,
    backgroundColor: "#333333",
  },
});