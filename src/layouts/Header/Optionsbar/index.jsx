import { Link } from "react-router-dom";
import Burger_Icon from "../../../assets/icons/burger";
import Dark_mode_Icon from "../../../assets/icons/dark_mode";
import Light_mode_Icon from "../../../assets/icons/light_mode";
import Button from "../../../components/Button";
import StyledDiv from "./Optionsbar.styles";
import { useTheme } from "../../../styles/theme/theme";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

const Optionsbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation("option-bar");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const languageMenuRef = useRef(null); // Referencia al contenedor del menú

  const availableLanguages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setShowLanguageMenu(false); // Oculta el menú después de seleccionar un idioma
  };

  // Detecta clics fuera del menú para ocultarlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setShowLanguageMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StyledDiv>
      <ul className="list">
        <li
          className="item"
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
        <li
          className="item"
          onClick={() => setShowLanguageMenu(!showLanguageMenu)} // Muestra/oculta el menú de idiomas
          ref={languageMenuRef} // Referencia al menú de idiomas
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
            fontSize={"20px"}
            hoverBackground={"--background-secondary"}
            hoverShadow={"2px 2px 4px --shadow-color"}
            hoverBorderWidth={"1px"}
            hoverBorderStyle={"solid"}
            hoverBorderColor={"--tertiary"}
            hoverFontColor={"--font-tertiary"}
            ariaLabel={"Cambiar idioma"}
          >
            {i18n.language.toUpperCase()}
          </Button>
          {showLanguageMenu && ( // Renderiza el menú si `showLanguageMenu` es true
            <ul className="language-menu">
              {availableLanguages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)} // Cambia el idioma al hacer click
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
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
              ariaLabel={"Iniciar sesión"}
            >
              {t("sign-in")}
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
              ariaLabel={"Registrarse"}
            >
              {t("sign-up")}
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
