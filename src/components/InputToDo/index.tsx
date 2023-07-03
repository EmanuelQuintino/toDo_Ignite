import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { styles } from "./style";

export function InputToDo() {
  const handleAddToDo = () => console.log("ToDo");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={"#808080"}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddToDo}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};