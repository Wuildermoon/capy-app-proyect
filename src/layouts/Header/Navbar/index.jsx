import Button from "../Button";
import StyledNav from "./Navbar.styles";

const Navbar = () => {
  const items = ["Encontrar eventos", "Crear eventos", "Ayuda"];
  return (
    <StyledNav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Button
              padding={"8px"}
              shadow={"2px 2px 4px var(--shadow-color)"}
              borderRadius={"8px"}
              color={"var(--tertiary)"}
              fontSize={"16px"}
              hoverBackground={"var(--secondary)"}
              hoverFontColor={"var(--primary)"}
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Navbar;
