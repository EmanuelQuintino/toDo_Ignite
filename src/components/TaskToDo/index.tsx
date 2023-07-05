import { View, TouchableOpacity, Text, Image } from 'react-native';
import trashIcon from "../../../assets/trashIcon.png";
import circleIcon from "../../../assets/circleIcon.png";
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
        <Image source={circleIcon} />
      </TouchableOpacity>

      <Text style={styles.text}>{task}</Text>

      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
};