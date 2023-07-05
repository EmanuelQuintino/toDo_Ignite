import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { styles } from "./style";

type Props = {
  onAdd: () => void;
};

export function InputToDo({ onAdd }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={"#808080"}
      />

      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};