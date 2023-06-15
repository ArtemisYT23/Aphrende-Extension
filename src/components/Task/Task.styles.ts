import styled from "@emotion/styled";

export const ContentTask = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 20px 0;
  overflow: hidden;
  background-color: #e8e4ac;
  margin: 1rem 0 1rem 0;
  &:hover {
    background-color: #e8e4aca8;
    cursor: default;
  }
`;

export const LineColor = styled.div`
  background-color: #e8e4ac;
  width: 100%;
  height: 10px;
`;

export const DetailDate = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Date = styled.div`
  margin: 0.4rem 1rem 0 0;
  color: #424241;
  font-weight: 600;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
`;

export const OptionContent = styled.div`
  width: 110px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
`;

export const ButtonOption = styled.button`
  width: 60px;
  height: 100%;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

export const TaskDescription = styled.div`
  width: 100%;
  height: 135px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const Text = styled.span`
  width: 80%;
  text-align: justify;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  line-height: 2;
`;
