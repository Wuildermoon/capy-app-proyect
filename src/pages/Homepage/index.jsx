import { useContext } from "react";
import Banner from "./Banner";
import CategoriesBar from "./CategoriesBar";
import FeaturedEvents from "./FeaturedEvents";
import StyledSection from "./Homepage.styles";
import { GlobalContext } from "../../contexts/GlobalContext";
import Content from "./Content";

const Homepage = () => {
  const { state } = useContext(GlobalContext);
  const { events, categories, homeContent, touristDestinations } = state;

  return (
    <StyledSection>
      <Banner />
      <CategoriesBar categoriesList={categories} />
      <FeaturedEvents events={events} />
      <Content
        events={events}
        homeContent={homeContent}
        touristDestinations={touristDestinations}
      />
    </StyledSection>
  );
};

export default Homepage;
