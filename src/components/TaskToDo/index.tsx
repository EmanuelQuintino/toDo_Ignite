import { View, TouchableOpacity, Text, Image } from 'react-native';
import trashIcon from "../../../assets/trashIcon.png";
import circleIcon from "../../../assets/circleIcon.png";
import { styles } from "./style";

export function TaskToDo() {
  const handleRemoveToDo = () => console.log("removeToDo");
  const handleCompleteToDo = () => console.log("completeToDo");
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCompleteToDo}>
        <Image source={circleIcon} />
      </TouchableOpacity>

      <Text style={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleRemoveToDo}>
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
};