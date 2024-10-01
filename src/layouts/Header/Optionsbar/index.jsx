import { Link } from "react-router-dom";
import Burger_Icon from "../../../assets/icons/burger";
import Dark_mode_Icon from "../../../assets/icons/dark_mode";
import Light_mode_Icon from "../../../assets/icons/light_mode";
import Button from "../../../components/Button";
import StyledDiv from "./Optionsbar.styles";
import { useTheme } from "../../../styles/theme/theme";

const Optionsbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <StyledDiv>
      <ul className="list">
        <li
          className={"item"}
          onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        >
          <Button
            height={"40px"}
            width={"40px"}
            fontFamily={"--font-alternative"}
            padding={"8px"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            borderColor={"--senary"}
            borderRadius={"50px"}
            fontColor={"--font-primary"}
            fontSize={"22px"}
            hoverBackground={"--background-secondary"}
            hoverShadow={"2px 2px 4px --shadow-color"}
            hoverBorderWidth={"1px"}
            hoverBorderStyle={"solid"}
            hoverBorderColor={"--tertiary"}
            hoverFontColor={"--font-tertiary"}
            ariaLabel={"Boton para cambiar al modo oscuro"}
          >
            {theme === "light" ? <Dark_mode_Icon /> : <Light_mode_Icon />}
          </Button>
        </li>
        <li className={"item"}>
          <Button
            height={"40px"}
            width={"40px"}
            fontFamily={"--font-alternative"}
            padding={"8px"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            borderColor={"--senary"}
            borderRadius={"50px"}
            fontColor={"--font-primary"}
            fontSize={"20px"}
            hoverBackground={"--background-secondary"}
            hoverShadow={"2px 2px 4px --shadow-color"}
            hoverBorderWidth={"1px"}
            hoverBorderStyle={"solid"}
            hoverBorderColor={"--tertiary"}
            hoverFontColor={"--font-tertiary"}
            ariaLabel={"Crear una nueva cuenta"}
          >
            ES
          </Button>
        </li>
        <li className="item session">
          <Link to={"/coming_soon"}>
            <Button
              height={"40px"}
              padding={"8px"}
              borderWidth={"1px"}
              borderStyle={"solid"}
              borderColor={"--senary"}
              borderRadius={"8px"}
              fontColor={"--font-primary"}
              hoverBackground={"--background-secondary"}
              hoverShadow={"2px 2px 4px --shadow-color"}
              hoverBorderWidth={"1px"}
              hoverBorderStyle={"solid"}
              hoverBorderColor={"--tertiary"}
              hoverFontColor={"--font-tertiary"}
              ariaLabel={"Iniciar sesión con una cuanta existente"}
            >
              Iniciar sesión
            </Button>
          </Link>
        </li>
        <li className="item session">
          <Link to={"/coming_soon"}>
            <Button
              height={"40px"}
              background={"--tertiary"}
              padding={"8px"}
              borderWidth={"1px"}
              borderStyle={"solid"}
              borderColor={"--senary"}
              borderRadius={"8px"}
              fontColor={"--font-secondary"}
              hoverBackground={"--background-secondary"}
              hoverShadow={"2px 2px 4px --shadow-color"}
              hoverBorderWidth={"1px"}
              hoverBorderStyle={"solid"}
              hoverBorderColor={"--tertiary"}
              hoverFontColor={"--font-tertiary"}
              ariaLabel={"Crear una nueva cuenta"}
            >
              Registrarse
            </Button>
          </Link>
        </li>
        <li className="item burger">
          <Button
            height={"40px"}
            width={"40px"}
            fontFamily={"--font-alternative"}
            padding={"8px"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            borderColor={"--senary"}
            borderRadius={"50px"}
            fontColor={"--font-primary"}
            fontSize={"20px"}
            hoverBackground={"--background-secondary"}
            hoverShadow={"2px 2px 4px --shadow-color"}
            hoverBorderWidth={"1px"}
            hoverBorderStyle={"solid"}
            hoverBorderColor={"--tertiary"}
            hoverFontColor={"--font-tertiary"}
            ariaLabel={"Abrir el menu"}
          >
            <Burger_Icon />
          </Button>
        </li>
      </ul>
    </StyledDiv>
  );
};

export default Optionsbar;
