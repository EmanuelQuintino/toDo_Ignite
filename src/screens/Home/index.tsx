import { FlatList, Text, View, Alert, Image } from 'react-native';
import { LogoHome } from "../../components/LogoHome";
import { styles } from './style';
import { InputToDo } from '../../components/InputToDo';
import { TaskToDo } from '../../components/TaskToDo';
import { useState, useEffect } from 'react';

type Task = {
  content: string;
  isCompleted: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({ content: "", isCompleted: false });
  const [totalCreatedToDos, setTotalCreatedToDos] = useState(0);
  const [totalComplatedToDos, setTotalComplatedToDos] = useState(0);

  const handleAddToDo = () => {
    setTasks([...tasks, {
      content: task.content,
      isCompleted: false
    }]);
    setTask({ content: "", isCompleted: false });
  };

  const handleRemoveToDo = (task: Task) => {
    const removeTask = () => {
      const newArrayTasks = tasks.filter(taskInArray => taskInArray !== task);
      setTasks(newArrayTasks);
    };

    Alert.alert("Remover Tarefa", "Deseja remover tarefa da lista de ToDo?", [
      { text: "Sim", onPress: removeTask },
      { text: "Não", style: "cancel" },
    ]);
  };

  const handleCompleteTask = (task: Task) => {
    const newArrayCompleteTask = tasks.map(taskInArray => {
      if (taskInArray === task) {
        return {
          ...taskInArray,
          isCompleted: taskInArray.isCompleted ? false : true
        };
      } else {
        return taskInArray;
      };
    });
    setTasks(newArrayCompleteTask);
  };

  const countCompleteTasks = () => {
    const arrayCompletedTasks = tasks.filter(task => task.isCompleted);
    setTotalComplatedToDos(arrayCompletedTasks.length);
  };

  useEffect(() => {
    setTotalCreatedToDos(tasks.length);
    countCompleteTasks();
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
          keyExtractor={item => item.content}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TaskToDo
              key={item.content}
              task={item}
              onDelete={() => handleRemoveToDo(item)}
              onComplete={() => handleCompleteTask(item)}
            />
          )}
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