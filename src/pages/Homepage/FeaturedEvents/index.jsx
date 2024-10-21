import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Card from "../../../components/Card";
import CardContainer from "../../../components/CardContainer";
import StyledFeaturedEventsSection from "./FeaturedEvents.styles";
import LeftScrollButton from "../../../components/LeftScrollButton";
import RightScrollButton from "../../../components/RightScrollButton";

const FeaturedEvents = ({ events }) => {
  const listRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const { t } = useTranslation("content");

  const handleScroll = (direction) => {
    if (listRef.current) {
      const cardWidth = listRef.current.querySelector("li").offsetWidth;
      const padding =
        parseInt(getComputedStyle(listRef.current).paddingLeft, 20) || 0;
      const scrollDistance = cardWidth + padding;

      listRef.current.scrollLeft +=
        direction === "left" ? -scrollDistance : scrollDistance;
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
    <StyledFeaturedEventsSection>
      {/* Renderiza la sección de "Destacados" con el título traducido */}
      <CardContainer classN={"featured"} title={t("featured")}>
        {showNavButtons && <LeftScrollButton handleScroll={handleScroll} />}
        <ul className="featured-list" ref={listRef}>
          {events.map((event, index) => (
            <li
              className="featured-item"
              key={index}
              aria-label={t("label", { x: event.title })}
            >
              <Link to={`/events/${event.id}`}>
                <Card {...event} />
              </Link>
            </li>
          ))}
        </ul>
        {showNavButtons && <RightScrollButton handleScroll={handleScroll} />}
      </CardContainer>

      {/* Renderiza la sección "Apúrate" con el título traducido */}
      <CardContainer classN={"hurry_up"} title={t("hurry-up")}>
        <ul className="hurry_up-list">
          {events.slice(0, 4).map((event, index) => (
            <li
              className="hurry_up-item"
              key={index}
              aria-label={t("label", { x: event.title })}
            >
              <Link to={`/events/${event.id}`}>
                <Card
                  banner={event.banner}
                  title={event.title}
                  date={event["date-short"]}
                />
              </Link>
            </li>
          ))}
        </ul>
      </CardContainer>
    </StyledFeaturedEventsSection>
  );
};

FeaturedEvents.propTypes = {
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
};

export default FeaturedEvents;
