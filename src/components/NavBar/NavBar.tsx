import { IconLogout } from "@/assets/Icons";
import {
  HeaderContent,
  ContainerButton,
  UserInformation,
  NameUser,
  Avatar,
  ContenLogout,
} from "./NavBar.styles";
import { Button } from "@/components";
import { logout } from "@/store/reducers/authReducers";
import { useAppDispatch, useAppSelector } from "@/store/store";

const NavBar: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContent>
      <ContainerButton>
        <Button />
      </ContainerButton>
      <UserInformation>
        <NameUser>{user?.displayName}</NameUser>
        <Avatar src={user?.photoURL as string} />
        <ContenLogout onClick={handleLogout}>
          <IconLogout />
        </ContenLogout>
      </UserInformation>
    </HeaderContent>
  );
};

export default NavBar;
