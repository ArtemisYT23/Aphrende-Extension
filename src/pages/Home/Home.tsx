import { Task } from "@/components";
import {
  TaskDetail,
  TitleNote,
  ContenteTitle,
  AppContent,
} from "./Home.styles";
import { useState, useEffect } from "react";
import { Item } from "@/types";

const Home: React.FC = () => {
  const [TaskList, setTaskList] = useState<Item[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTaskList(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <AppContent>
      <ContenteTitle>
        <TitleNote>NOTAS</TitleNote>
      </ContenteTitle>

      <TaskDetail>
        {TaskList.map((taskItem, i) => (
          <Task key={i} item={taskItem} />
        ))}
      </TaskDetail>
    </AppContent>
  );
};

export default Home;
