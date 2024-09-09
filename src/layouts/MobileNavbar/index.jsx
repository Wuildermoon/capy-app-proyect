import { Link } from "react-router-dom";
import Button from "../../components/Button";
import StyledNav from "./MobileNavbar.styles";
import Add_Icon from "../../assets/icons/add";
import Home_Icon from "../../assets/icons/home";
import Map_pin_Icon from "../../assets/icons/map_pin";
import Profile_Icon from "../../assets/icons/profile";
import Search_Icon from "../../assets/icons/search";

const MobileNavbar = () => {
  const itemsMobile = [
    {
      text: "Home",
      area_label: "Ir a la sección principal",
      icon: (
        <span className="stroke-icon">
          <Home_Icon />
        </span>
      ),
      link: "/",
    },
    {
      text: "Buscar",
      area_label: "Ir a la sección de busqueda",
      icon: (
        <span className="fill-icon">
          <Search_Icon />
        </span>
      ),
      link: "/coming_soon",
    },
    {
      text: "Crear",
      area_label: "ir al menu de ayuda",
      icon: (
        <span className="fill-icon">
          <Add_Icon />
        </span>
      ),
      link: "/coming_soon",
    },
    {
      text: "Mapa",
      area_label: "abrir el mapa",
      icon: (
        <span className="stroke-icon">
          <Map_pin_Icon />
        </span>
      ),
      link: "/coming_soon",
    },
    {
      text: "Perfil",
      area_label: "ir al la sección del perfil de usuario",
      icon: (
        <span className="fill-icon">
          <Profile_Icon />
        </span>
      ),
      link: "/coming_soon",
    },
  ];
  return (
    <StyledNav>
      <div className="mobile-nav">
        <ul className="list-mobile">
          {itemsMobile.map((item, index) => (
            <li className="item-mobile" key={index}>
              <Link to={item.link}>
                <Button ariaLabel={item.area_label}>
                  {item.icon}
                  {item.text}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledNav>
  );
};

export default MobileNavbar;
