import { Link } from "react-router-dom";
import Button from "../Button";
import StyledDiv from "./Navbar.styles";
import MobileNavbar from "../../layouts/MobileNavbar";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  const items = [
    {
      text: `${t("discover")}`,
      area_label: `${t("discover-label")}`,
      link: "/",
    },
    {
      text: `${t("create")}`,
      area_label:`${t("create-label")}`,
      link: "/coming_soon",
    },
    {
      text: `${t("map")}`,
      area_label:`${t("map-label")}`,
      link: "/maps",
    },
    {
      text: `${t("help")}`,
      area_label:`${t("help-label")}`,
      link: "/coming_soon",
    },
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
                  hoverShadow={"2px 2px 4px --shadow-color"}
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
