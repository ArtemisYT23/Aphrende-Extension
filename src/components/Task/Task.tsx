import { useState } from "react";
import {
  ContentTask,
  LineColor,
  DetailDate,
  Date,
  TaskDescription,
  Text,
  OptionContent,
  ButtonOption,
} from "./Task.styles";
import { IconEdit, IconDelete } from "@/assets/Icons";
import { Item } from "@/types";

interface ChildProps {
  item: Item;
}

const Task: React.FC<ChildProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDelete = (index: string) => {
    const storedTasks = localStorage.getItem("todos");

    if (storedTasks) {
      const items: Item[] = JSON.parse(storedTasks);
      const updatedItems = items.filter((item) => item.id !== index);
      localStorage.setItem("todos", JSON.stringify(updatedItems));
    }
  };

  return (
    <ContentTask
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LineColor />

      {isHovered && (
        <DetailDate>
          <OptionContent>
            <ButtonOption>
              <IconEdit />
            </ButtonOption>

            <ButtonOption onClick={() => handleDelete(item.id)}>
              <IconDelete />
            </ButtonOption>
          </OptionContent>
        </DetailDate>
      )}
      {!isHovered && (
        <DetailDate>
          <Date>{item.date}</Date>
        </DetailDate>
      )}
      <TaskDescription>
        <Text>{item.task}</Text>
      </TaskDescription>
    </ContentTask>
  );
};

export default Task;
