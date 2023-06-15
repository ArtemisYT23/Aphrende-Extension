import {
  ContentNote,
  NoteText,
  ButtonOption,
  ContentOption,
} from "./Note.styles";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/types";
import { useState } from "react";
import { Item } from "@/types";
import { v4 as uuidv4 } from "uuid";

const Note: React.FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  const getCurrentDate = (): string => {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = String(currentDate.getFullYear());

    return `${day}/${month}/${year}`;
  };

  const handleSave = () => {
    const newTodoItem: Item = {
      id: uuidv4(),
      date: getCurrentDate(),
      task: value,
    };

    const storedTasks = localStorage.getItem("todos");
    let updatedList: Item[];

    if (storedTasks) {
      updatedList = JSON.parse(storedTasks);
      updatedList.push(newTodoItem);
    } else {
      updatedList = [newTodoItem];
    }
    
    localStorage.setItem("todos", JSON.stringify(updatedList));
    navigate(`/${PrivateRoutes.PRIVATE}`);
  };

  return (
    <ContentNote>
      <NoteText value={value} onChange={(e) => setValue(e.target.value)} />
      <ContentOption>
        <ButtonOption
          color={"#c4c4c4"}
          onClick={() => navigate(`/${PrivateRoutes.PRIVATE}`)}
        >
          Cancelar
        </ButtonOption>
        <ButtonOption color={"#ffa600"} onClick={handleSave}>
          Guardar
        </ButtonOption>
      </ContentOption>
    </ContentNote>
  );
};

export default Note;
