import { TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from "./style";

type Task = {
  content: string;
  isChecked: boolean;
};

type Props = {
  onAdd: () => void;
  task: Task;
  setTask: (task: Task) => void;
};

export function InputToDo({ onAdd, task, setTask }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={"#808080"}
        onChangeText={(text: string) => setTask({ ...task, content: text })}
        value={task.content}
      />

      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Image source={require("../../../assets/plus.png")} />
      </TouchableOpacity>
    </View>
  );
};