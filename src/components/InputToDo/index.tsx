import { TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from "./style";

type Props = {
  onAdd: () => void;
  task: string;
  setTask: (task: string) => void;
};

export function InputToDo({ onAdd, task, setTask }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={"#808080"}
        onChangeText={setTask}
        value={task}
      />

      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Image source={require("../../../assets/plus.png")} />
      </TouchableOpacity>
    </View>
  );
};