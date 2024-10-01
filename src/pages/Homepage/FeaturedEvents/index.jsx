import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "../../../components/Card";
import CardContainer from "../../../components/CardContainer";
import StyledFeaturedEventsSection from "./FeaturedEvents.styles";
import { shuffleArray } from "../../../utils/utils";
import LeftScrollButton from "../../../components/LeftScrollButton";
import RightScrollButton from "../../../components/RightScrollButton";

const FeaturedEvents = ({ events }) => {
  const listRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false);

  
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
      <CardContainer classN={"featured"} title={"Destacados"}>
        {showNavButtons && <LeftScrollButton handleScroll={handleScroll} />}
        <ul className="featured-list" ref={listRef}>
          {shuffleArray(events).map((event, index) => (
            <li
              className="featured-item"
              key={index}
              aria-label={`Ver detalled del evento: ${event.title}`}
            >
              <Link to={`/events/${event.id}`}>
                <Card
                  banner={event.banner}
                  title={event.title}
                  date={event["date-short"]}
                  place={event.place}
                />
              </Link>
            </li>
          ))}
        </ul>
        {showNavButtons && <RightScrollButton handleScroll={handleScroll} />}
      </CardContainer>
      <CardContainer classN={"hurry_up"} title={"Apúrate ve"}>
        <ul className="hurry_up-list">
          {shuffleArray(events)
            .slice(0, 4)
            .map((event, index) => (
              <li
                className="hurry_up-item"
                key={index}
                aria-label={`Ver detalled del evento: ${event.title}`}
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
