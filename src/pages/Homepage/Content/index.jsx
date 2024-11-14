import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import StyledEventContentSection from "./Content.styles";
import CardContainer from "../../../components/CardContainer";
import Card from "../../../components/Card";
import LeftScrollButton from "../../../components/LeftScrollButton";
import RightScrollButton from "../../../components/RightScrollButton";
import { useTranslation } from "react-i18next";

const Content = ({ events, homeContent, touristDestinations }) => {
  const { t } = useTranslation("content");

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
    return items.slice(0, 8).map((item, index) => (
      <li
        className={`list-item ${
          isTouristDestinations ? "tourist-item" : "event-item"
        }`}
        key={index}
        aria-label={t("label", { x: item.title })}
      >
        <Link
          to={`/${isTouristDestinations ? "tourism" : "events"}/${item.id}`}
        >
          <Card {...item} />
        </Link>
      </li>
    ));
  };

  return (
    <StyledEventContentSection>
      {homeContent
        .filter((item) =>
          ["made_for_you", "you_might_like", "get_to_know_the_city"].includes(
            item.id,
          ),
        )
        .map((item, index) => (
          <CardContainer classN={item.id} title={t(item.name)} key={index}>
            {showNavButtons[index] && (
              <LeftScrollButton handleScroll={handleScroll} index={index} />
            )}
            <ul
              className={`list ${item.name}-list `}
              ref={(list) => (listRefs.current[index] = list)}
            >
              {item.id === "get_to_know_the_city"
                ? renderListItems(touristDestinations, true)
                : renderListItems(
                    events.filter(
                      (item) =>
                        item.category && item.category.includes("events"),
                    ),
                    false,
                  )}
            </ul>
            {showNavButtons[index] && (
              <RightScrollButton handleScroll={handleScroll} index={index} />
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
