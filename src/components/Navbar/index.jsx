import { Link } from "react-router-dom";
import Button from "../Button";
import StyledDiv from "./Navbar.styles";
import MobileNavbar from "../../layouts/MobileNavbar";

const Navbar = () => {
  const items = [
    {
      text: "Encontrar eventos",
      area_label: "Ir a la sección principal",
      link: "/",
    },
    {
      text: "Crear eventos",
      area_label: "Ir a la sección para añadir eventos",
      link: "/coming_soon",
    },
    {
      text: "Mapa",
      area_label: "Ir a la sección para ver el mapa",
      link: "/coming_soon",
    },
    { text: "Ayuda", area_label: "ir al menu de ayuda", link: "/coming_soon" },
  ];
  return (
    <StyledDiv>
      <nav>
        <ul className="list">
          {items.map((item, index) => (
            <li className="item" key={index}>
              <Link to={item.link}>
                <Button
                  height={"40px"}
                  padding={"8px"}
                  borderWidth={"1px"}
                  borderStyle={"solid"}
                  borderColor={"transparent"}
                  borderRadius={"8px"}
                  fontColor={"--font-primary"}
                  hoverBackground={"--secondary"}
                  hoverShadow={"2px 2px 4px --primary-shadow-color"}
                  hoverBorderWidth={"1px"}
                  hoverBorderStyle={"solid"}
                  hoverBorderColor={"--primary"}
                  hoverFontColor={"--primary"}
                  ariaLabel={item.area_label}
                >
                  {item.text}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobile-list">
        <MobileNavbar />
      </div>
    </StyledDiv>
  );
};

export default Navbar;
