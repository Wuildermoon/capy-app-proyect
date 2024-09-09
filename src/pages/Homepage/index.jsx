import { useContext } from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import FeaturedEvents from "./FeaturedEvents";
import StyledSection from "./Homepage.styles";
import { GlobalContext } from "../../contexts/GlobalContext";
import Content from "./Content";

const Homepage = () => {
  const { events, categories, homeContent, touristDestinations } =
    useContext(GlobalContext);
  return (
    <StyledSection>
      <Banner />
      <Categories categories={categories} />
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
