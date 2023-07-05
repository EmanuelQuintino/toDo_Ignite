import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    width: "100%",
  },

  main: {
    padding: 18,
    marginTop: -46,
  },

  box: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
    fontSize: 16,
  },

  completed: {
    color: "#8284fa",
    fontWeight: "bold",
    fontSize: 16,
  },

  total: {
    color: "#d9d9d9",
    fontWeight: "bold",
    fontSize: 14,
    borderRadius: 100,
    paddingHorizontal: 12,
    backgroundColor: "#333333",
  },

  emptyList: {
    color: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },

  emptyListText1: {
    color: "#808080",
    fontWeight: "bold",
    fontSize: 16,
  },

  emptyListText2: {
    color: "#808080cc",
    fontSize: 16,
  },
});