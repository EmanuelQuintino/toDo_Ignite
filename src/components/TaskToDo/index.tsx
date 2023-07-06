import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from "./style";

type Props = {
  task: string;
  onComplete: () => void;
  onDelete: () => void;
};

export function TaskToDo({ task, onComplete, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onComplete}>
        <Image source={require("../../../assets/circleIcon.png")} />
      </TouchableOpacity>

      <Text style={styles.text}>{task}</Text>

      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <Image source={require("../../../assets/trashIcon.png")} />
      </TouchableOpacity>
    </View>
  );
};