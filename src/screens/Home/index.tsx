import { Text, View } from 'react-native';
import { LogoHome } from "../../components/LogoHome";
import { styles } from './style';
import { InputToDo } from '../../components/InputToDo';
import { TaskToDo } from '../../components/TaskToDo';

export function Home() {
  return (
    <View style={styles.container}>
      <LogoHome />

      <View style={styles.main}>
        <InputToDo />

        <View style={styles.box}>
          <View style={styles.boxTotalToDos}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.total}>2</Text>
          </View>

          <View style={styles.boxTotalToDos}>
            <Text style={styles.completed}>Concluídas</Text>
            <Text style={styles.total}>3</Text>
          </View>
        </View>

        <TaskToDo />
        <TaskToDo />
        <TaskToDo />
      </View>
    </View>
  );
};