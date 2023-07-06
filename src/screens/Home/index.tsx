import { FlatList, Text, View, Alert, Image } from 'react-native';
import { LogoHome } from "../../components/LogoHome";
import { styles } from './style';
import { InputToDo } from '../../components/InputToDo';
import { TaskToDo } from '../../components/TaskToDo';
import { useState, useEffect } from 'react';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [totalCreatedToDos, setTotalCreatedToDos] = useState(0);
  const [totalComplatedToDos, setTotalComplatedToDos] = useState(0);

  const handleAddToDo = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleRemoveToDo = (task: string) => {
    const removeTask = () => {
      const newArrayTasks = tasks.filter(taskInArray => taskInArray !== task);
      setTasks(newArrayTasks);
    };

    Alert.alert("Remover Tarefa", "Deseja remover tarefa da lista de To Do?", [
      { text: "Sim", onPress: removeTask },
      { text: "Não", style: "cancel" },
    ]);
  };

  useEffect(() => {
    setTotalCreatedToDos(tasks.length);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <LogoHome />

      <View style={styles.main}>
        <InputToDo
          onAdd={handleAddToDo}
          task={task}
          setTask={setTask}
        />

        <View style={styles.box}>
          <View style={styles.boxTotalToDos}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.total}>{totalCreatedToDos}</Text>
          </View>

          <View style={styles.boxTotalToDos}>
            <Text style={styles.completed}>Concluídas</Text>
            <Text style={styles.total}>{totalComplatedToDos}</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TaskToDo
              task={item}
              onDelete={() => handleRemoveToDo(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Image
                style={styles.imageClipBoard}
                source={require("../../../assets/Clipboard.png")}
              />

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