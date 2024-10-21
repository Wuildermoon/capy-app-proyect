import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StyledCategoriesSection from "./Categories.styles";
import Button from "../../../components/Button";
import RightScrollButton from "../../../components/RightScrollButton";
import LeftScrollButton from "../../../components/LeftScrollButton";
import { useTranslation } from "react-i18next";

const Categories = ({ categoriesList }) => {
  const { t } = useTranslation("categories");
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

  return (
    <StyledCategoriesSection>
      {showNavButtons && <LeftScrollButton handleScroll={handleScroll} />}
      <ul className="list" ref={listRef}>
        {categoriesList.map((item, index) => (
          <li
            className={item.name === "see-all" ? "item special-button" : "item"}
            key={item.id || index}
          >
            <Link to={`/categories/${item.name}`}>
              <Button ariaLabel={t(item.area_label)}>
                <span className="fill-icon">{item.icon}</span>
                {t(item.name)}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
      {showNavButtons && <RightScrollButton handleScroll={handleScroll} />}
    </StyledCategoriesSection>
  );
};

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      area_label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

export default Categories;
