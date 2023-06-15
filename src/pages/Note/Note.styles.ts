import styled from "@emotion/styled";

export const ContentNote = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NoteText = styled.textarea`
  border: 1px solid #c4c4c4;
  width: 90%;
  height: 500px;
  border-radius: 5px;
  margin: 1rem;
  outline: none;
  caret-color: #c4c4c4; /* Cambia el color del cursor a rojo */
  padding-top: 20px; /* Ajusta el espacio en la parte superior */
  text-indent: 10px; /* Ajusta la posición del texto en la primera línea */
`;

export const ContentOption = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ButtonOption = styled.button`
  margin: 0.5rem;
  width: 100px;
  height: 35px;
  border: none;
  background-color: ${({ color }) => color};
  color: #fff;
  cursor: pointer;
  border-radius: 13px;
`;
