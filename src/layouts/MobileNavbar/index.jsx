import { Link } from "react-router-dom";
import Button from "../../components/Button";
import StyledNav from "./MobileNavbar.styles";
import Add_Icon from "../../assets/icons/add";
import Home_Icon from "../../assets/icons/home";
import Map_pin_Icon from "../../assets/icons/map_pin";
import Profile_Icon from "../../assets/icons/profile";
import Search_Icon from "../../assets/icons/search";
import { useTranslation } from "react-i18next";

const MobileNavbar = () => {
  const {t} = useTranslation("mobile-navbar");
  const itemsMobile = [
    {
      text: `${t("home")}`,
      area_label: `${t("home-label")}`,
      icon: (
        <span className="stroke-icon">
          <Home_Icon />
        </span>
      ),
      link: "/",
    },
    {
      text: `${t("search")}`,
      area_label: `${t("search-label")}`,
      icon: (
        <span className="fill-icon">
          <Search_Icon />
        </span>
      ),
      link: "/coming_soon",
    },
    {
      text: `${t("create")}`,
      area_label: `${t("create-label")}`,
      icon: (
        <span className="fill-icon">
          <Add_Icon />
        </span>
      ),
      link: "/coming_soon",
    },
    {
      text: `${t("map")}`,
      area_label: `${t("map-label")}`,
      icon: (
        <span className="stroke-icon">
          <Map_pin_Icon />
        </span>
      ),
      link: "/coming_soon",
    },
    {
      text: `${t("profile")}`,
      area_label: `${t("profile-label")}`,
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
