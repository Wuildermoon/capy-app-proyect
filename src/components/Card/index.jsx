import PropTypes from "prop-types";
import { StyledCardDiv, StyledCardFigure } from "./Card.styles";

const Card = ({ banner, title, date, place, organizer, price, description }) => {
  const isPriceFree = price === "Gratis" || price === "Free";
  return (
    <StyledCardDiv>
      <StyledCardFigure
        $background={banner}
        alt={`Banner del evento ${title}`}
      ></StyledCardFigure>
      <div className="description">
        <h3 className="title">{title}</h3>
        <p className="date">{date}</p>
        <p className="place">{place}</p>
        <p className="organizer">{organizer}</p>
        <p className="description-text">{description}</p>
        <p className="price">{isPriceFree ? price : `$${price}`}</p>
      </div>
    </StyledCardDiv>
  );
};

/* 
  TEMPLATE:
  <Card
    $banner={banner}
    $title={title}
    $date={date}
    $place={place}
    $organizer={organizer}
    $price={price}
    >
    {children}
  </Card>
*/

Card.propTypes = {
  banner: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  place: PropTypes.string,
  organizer: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};

export default Card;
