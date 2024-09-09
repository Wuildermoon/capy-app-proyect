import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import StyledEventContentSection from "./Content.styles";
import { shuffleArray } from "../../../utils/utils";
import CardContainer from "../../../components/CardContainer";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Arrow_left_circle_Icon from "../../../assets/icons/arrow_left_circle";
import Arrow_right_circle_Icon from "../../../assets/icons/arrow_right_circle";

const Content = ({ events, homeContent, touristDestinations }) => {
  const listRefs = useRef([]);
  const [showNavButtons, setShowNavButtons] = useState([]);

  const handleScroll = (direction, index) => {
    const listRef = listRefs.current[index];

    if (listRef) {
      const cardWidth = listRef.querySelector("li").offsetWidth;
      const gap = parseInt(getComputedStyle(listRef).gap, 10) || 0;
      const scrollDistance = cardWidth + gap;

      listRef.scrollLeft +=
        direction === "left" ? -scrollDistance : scrollDistance;
    }
  };

  useEffect(() => {
    const updateButtonsVisibility = () => {
      const visibility = homeContent.map((_, index) => {
        const listRef = listRefs.current[index];
        if (listRef) {
          const listWidth = listRef.scrollWidth;
          const containerWidth = listRef.clientWidth;
          return listWidth > containerWidth;
        }
        return false;
      });
      setShowNavButtons(visibility);
    };

    updateButtonsVisibility();
    window.addEventListener("resize", updateButtonsVisibility);

    return () => {
      window.removeEventListener("resize", updateButtonsVisibility);
    };
  }, [homeContent]);

  const renderListItems = (items, isTouristDestinations) => {
    return shuffleArray(items)
      .slice(0, 8)
      .map((item, index) => (
        <li
          className={`list-item ${
            isTouristDestinations ? "tourist-item" : "event-item"
          }`}
          key={index}
          aria-label={`Ver detalles de ${
            isTouristDestinations ? "destino turístico" : "evento"
          }: ${item.title}`}
        >
          <Link
            to={`/${isTouristDestinations ? "tourism" : "events"}/${item.id}`}
          >
            <Card
              {...item}
            />
          </Link>
        </li>
      ));
  };

  return (
    <StyledEventContentSection>
      {homeContent
        .filter((item) => ["3", "4", "5"].includes(item.id))
        .map((item, index) => (
          <CardContainer classN={item.classN} title={item.name} key={index}>
            {showNavButtons[index] && (
              <Button>
                <span
                  className="nav-button"
                  onClick={() => handleScroll("left", index)}
                  aria-label="Mover a la izquierda"
                >
                  <Arrow_left_circle_Icon />
                </span>
              </Button>
            )}
            <ul
              className={`list ${item.classN}-list `}
              ref={(list) => (listRefs.current[index] = list)}
            >
              {item.id === "5"
                ? renderListItems(touristDestinations, true)
                : renderListItems(events, false)}
            </ul>
            {showNavButtons[index] && (
              <Button>
                <span
                  className="nav-button"
                  onClick={() => handleScroll("right", index)}
                  aria-label="Mover a la derecha"
                >
                  <Arrow_right_circle_Icon />
                </span>
              </Button>
            )}
          </CardContainer>
        ))}
    </StyledEventContentSection>
  );
};

Content.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      banner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      "date-short": PropTypes.string.isRequired,
      "date-long": PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      organizer: PropTypes.string,
      price: PropTypes.string,
      "description-short": PropTypes.string,
      "description-long": PropTypes.string,
      category: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  touristDestinations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      banner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      price: PropTypes.string,
      "description-short": PropTypes.string,
      "description-long": PropTypes.string,
      category: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  homeContent: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      classN: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Content;
