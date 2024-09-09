import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import db from "../assets/data/db.json";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [touristDestinations, setTouristDestinations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [homeContent, setHomeContent] = useState([]);

  useEffect(() => {
    setEvents(db.events);
    setTouristDestinations(db["tourist-destinations"]);
    setCategories(db.categories);
    setHomeContent(db["home-content"]);
  }, []);

  console.log(events, categories, homeContent);
  return (
    <GlobalContext.Provider
      value={{
        events,
        setEvents,
        categories,
        setCategories,
        homeContent,
        setHomeContent,
        touristDestinations,
        setTouristDestinations,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContextProvider;
