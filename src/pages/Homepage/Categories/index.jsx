import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import StyledCategoriesSection from "./Categories.styles";
import Button from "../../../components/Button";
import Arrow_left_circle_Icon from "../../../assets/icons/arrow_left_circle";
import Arrow_right_circle_Icon from "../../../assets/icons/arrow_right_circle";
import Fastfood_Icon from "../../../assets/icons/fastfood";
import Palette_Icons from "../../../assets/icons/palette";
import Local_bar_Icon from "../../../assets/icons/local_bar";
import Theater_comedy_Icon from "../../../assets/icons/theater_comedy";
import Celebration_Icon from "../../../assets/icons/celebration";
import Music_note_Icon from "../../../assets/icons/music_note";
import Sports_and_outdoors_Icon from "../../../assets/icons/sports_and_outdoors";
import Eco_Icon from "../../../assets/icons/eco";
import Expand_circle_right_Icon from "../../../assets/icons/expand_circle_right";

const Categories = () => {
  const listRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const handleScroll = (direction) => {
    if (listRef.current) {
      listRef.current.scrollLeft += direction === "left" ? -210 : 210;
    }
  };
  
  useEffect(() => {
    const updateButtonsVisibility = () => {
      if (listRef.current) {
        const listWidth = listRef.current.scrollWidth;
        const containerWidth = listRef.current.clientWidth;

        setShowNavButtons(listWidth > containerWidth);
      }
    };

    updateButtonsVisibility();
    window.addEventListener("resize", updateButtonsVisibility);

    return () => {
      window.removeEventListener("resize", updateButtonsVisibility);
    };
  }, []);

  const categories = [
    {
      text: "Comida",
      area_label: "Ver la categoria de Comida",
      icon: <Fastfood_Icon />,
    },
    {
      text: "Arte",
      area_label: "Ver la categoria de Arte",
      icon: <Palette_Icons />,
    },
    {
      text: "Vida Nocturna",
      area_label: "Ver la categoria de Vida Nocturna",
      icon: <Local_bar_Icon />,
    },
    {
      text: "Teatro",
      area_label: "Ver la categoria de Teatro",
      icon: <Theater_comedy_Icon />,
    },
    {
      text: "Ferias",
      area_label: "Ver la categoria de Ferias",
      icon: <Celebration_Icon />,
    },
    {
      text: "Música",
      area_label: "Ver la categoria de Música",
      icon: <Music_note_Icon />,
    },
    {
      text: "Deportes",
      area_label: "Ver la categoria de Deportes",
      icon: <Sports_and_outdoors_Icon />,
    },
    {
      text: "Naturaleza",
      area_label: "Ver la categoria de Ecológico",
      icon: <Eco_Icon />,
    },
    {
      text: "Ver todo",
      area_label: "Ver todas las categorias",
      icon: <Expand_circle_right_Icon />,
    },
  ];
  return (
    <StyledCategoriesSection>
      {showNavButtons && (
        <Button>
          <span
            className="nav-button"
            onClick={() => handleScroll("left")}
            aria-label="Mover a la izquierda"
          >
            <Arrow_left_circle_Icon />
          </span>
        </Button>
      )}
      <ul className="list" ref={listRef}>
        {categories.map((item, index) => (
          <li
            className={
              item.text === "Ver todo" ? "item special-button" : "item"
            }
            key={index}
          >
            <Link to={`/categories/${item.text}`}>
              <Button ariaLabel={item.area_label}>
                <span className="fill-icon">{item.icon}</span>
                {item.text}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
      {showNavButtons && (
        <Button>
          <span
            className="nav-button"
            onClick={() => handleScroll("right")}
            aria-label="Mover a la derecha"
          >
            <Arrow_right_circle_Icon />
          </span>
        </Button>
      )}
    </StyledCategoriesSection>
  );
};

export default Categories;
