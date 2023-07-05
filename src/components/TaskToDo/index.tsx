import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from "./style";

export function TaskToDo() {
  const handleRemoveToDo = () => console.log("removeToDo");
  return (
    <View style={styles.container}>
      <Text>Remover Task</Text>

      <TouchableOpacity style={styles.button} onPress={handleRemoveToDo}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};