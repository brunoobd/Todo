import { Alert, FlatList, Image, View } from "react-native";
import { styles } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { Task } from "../../components/task";
import { ListEmpty } from "../../components/list-empty";
import { ListHeader } from "../../components/list-header";
import { CounterProps } from "../../components/counter-task";
import { TaskType } from "../../model";

export function Home() {
  const [tasks, setTasks] = useState(Array<TaskType>);
  const [taskName, setTaskName] = useState("");
  const { containerTop, logo, containerBottom, form, list } = styles;

  const counters: Array<CounterProps> = [
    {
      text: "Criadas",
      textColor: "#4EA8DE",
      counter: tasks.length,
    },
    {
      text: "Concluídas",
      textColor: "#8284FA",
      counter: tasks.filter((task) => task.completed).length,
    },
  ];

  const renderItem = ({ item }: { item: TaskType }) => {
    const handleCompleteTask = () => {
      setTasks((prevState) => [
        ...prevState.filter((task) => task.id !== item.id),
        { ...item, completed: true },
      ]);
    };

    const handleRemoveTask = () => {
      Alert.alert(
        "Apagar tarefa",
        item.completed
          ? "Deseja realmente apagar essa tarefa concluída?"
          : "Tarefa não concluída, deseja realmente apagar?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Apagar",
            onPress: () =>
              setTasks((prevState) => [
                ...prevState.filter((task) => task.id !== item.id),
              ]),
          },
        ]
      );
    };

    return (
      <Task
        key={item.id}
        task={item}
        onComplete={handleCompleteTask}
        onRemove={handleRemoveTask}
      />
    );
  };

  const keyExtractor = ({ id }: TaskType) => `${id}`;

  const addTask = () => {
    let ids: Array<number> = [];

    tasks.map((task) => ids.push(task.id));
    const nextTaskId = !!tasks.length ? Math.max(...ids) + 1 : 0;

    setTasks((prevState) => [
      { id: nextTaskId, name: taskName.trim(), completed: false },
      ...prevState,
    ]);

    setTaskName("");
  };

  const handleAddTask = () => {
    if (taskName.trim() === "") {
      return Alert.alert(
        "Nome da tarefa",
        "O nome da tarefa não pode ser vazio.",
        [{ text: "Ok", onPress: () => setTaskName("") }]
      );
    } else if (!!tasks.filter((task) => task.name === taskName.trim()).length) {
      return Alert.alert(
        "Tarefa existente",
        "Já existe uma tarefa com esse nome, deseja adiconar mesmo assim?",
        [
          { text: "Sim", onPress: addTask },
          {
            text: "Não",
            style: "cancel",
            onPress: () => setTaskName(""),
          },
        ]
      );
    }
    addTask();
  };

  useEffect(() => {
    console.log({ tasks });
  }, [tasks]);
  return (
    <>
      <View style={containerTop}>
        <Image
          style={logo}
          source={require("../../../assets/images/logo.png")}
        />
      </View>
      <View style={containerBottom}>
        <View style={form}>
          <Input value={taskName} onChangeText={setTaskName} />
          <Button onPress={handleAddTask} />
        </View>
        <View style={list}>
          <ListHeader counters={counters} />
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ListEmptyComponent={<ListEmpty />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}
