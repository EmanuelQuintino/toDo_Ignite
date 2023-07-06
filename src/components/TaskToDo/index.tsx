import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from "./style";

type Task = {
  content: string;
  isCompleted: boolean;
};

type Props = {
  task: Task;
  onDelete: () => void;
  onComplete: () => void;
};

export function TaskToDo({ task, onDelete, onComplete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onComplete}>
        {task.isCompleted
          ? <Image source={require("../../../assets/checked.png")} />
          : <Image source={require("../../../assets/circleIcon.png")} />
        }
      </TouchableOpacity>

      <Text style={task.isCompleted ? styles.textChecked : styles.text}>
        {task.content}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <Image source={require("../../../assets/trashIcon.png")} />
      </TouchableOpacity>
    </View>
  );
};