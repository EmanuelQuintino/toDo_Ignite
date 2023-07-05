import { Text, View } from 'react-native';
import { LogoHome } from "../../components/LogoHome";
import { styles } from './style';
import { InputToDo } from '../../components/InputToDo';
import { TaskToDo } from '../../components/TaskToDo';

export function Home() {
  const handleAddToDo = () => console.log("ToDo");
  const handleRemoveToDo = (task: string) => console.log(`removeToDo ${task}`);
  const handleCompleteToDo = (complete: boolean) => {
    console.log("completeToDo", complete)
  };

  return (
    <View style={styles.container}>
      <LogoHome />

      <View style={styles.main}>
        <InputToDo onAdd={handleAddToDo} />

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

        <TaskToDo
          task={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          onComplete={() => handleCompleteToDo(true)}
          onDelete={() => handleRemoveToDo("Remove")}
        />

        <TaskToDo
          task={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          onComplete={handleCompleteToDo}
          onDelete={handleRemoveToDo}
        />

        <TaskToDo
          task={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          onComplete={handleCompleteToDo}
          onDelete={handleRemoveToDo}
        />
      </View>
    </View>
  );
};