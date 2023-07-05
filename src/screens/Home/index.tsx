import { FlatList, Text, View } from 'react-native';
import { LogoHome } from "../../components/LogoHome";
import { styles } from './style';
import { InputToDo } from '../../components/InputToDo';
import { TaskToDo } from '../../components/TaskToDo';
import { useState } from 'react';

export function Home() {
  const [tasks, setTasks] = useState([]);

  const handleAddToDo = () => {
    setTasks(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]);
  };
  const handleRemoveToDo = (task: string) => setTasks([]);

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

        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TaskToDo
              task={`${item} Lorem ipsum dolor sit amet consectetur adipisicing.`}
              onComplete={() => handleCompleteToDo(true)}
              onDelete={() => handleRemoveToDo("Remove")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Text style={styles.emptyListText1}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListText2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};