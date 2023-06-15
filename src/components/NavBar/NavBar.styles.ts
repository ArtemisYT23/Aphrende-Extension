import styled from "@emotion/styled";

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const ContainerButton = styled.div`
  width: 10%;
`;

export const UserInformation = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const NameUser = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0 1rem 0 0;
  font-family: "Roboto", sans-serif;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: default;

`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin: 0 1rem 0 0;
  cursor: pointer;
`;

export const ContenLogout = styled.div`
  margin: 0 1rem 0 0;
  cursor: pointer;
`;