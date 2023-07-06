import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useState } from "react";
import { styles } from "./style";

type Props = {
  task: string;
  onDelete: () => void;
};

export function TaskToDo({ task, onDelete }: Props) {
  const [onComplete, setOnComplete] = useState(false);
  const handleOnComplete = () => setOnComplete(onComplete ? false : true);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleOnComplete}>
        {onComplete
          ? <Image source={require("../../../assets/checked.png")} />
          : <Image source={require("../../../assets/circleIcon.png")} />
        }
      </TouchableOpacity>

      <Text style={onComplete ? styles.textChecked : styles.text}>{task}</Text>

      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <Image source={require("../../../assets/trashIcon.png")} />
      </TouchableOpacity>
    </View>
  );
};