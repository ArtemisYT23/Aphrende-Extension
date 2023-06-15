import { IconNew } from "@/assets/Icons";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/types";
import { ContainerButton, ButtonNew } from "./Button.styles";

const Button: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ContainerButton>
      <ButtonNew onClick={() => navigate(`${PrivateRoutes.NEWNOTE}`)}>
        <IconNew />
      </ButtonNew>
    </ContainerButton>
  );
};

export default Button;
