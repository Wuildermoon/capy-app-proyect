import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useMemo } from "react";
import db from "../assets/data/db.jsx";
import { shuffleArray } from "../utils/utils.js";

const actionTypes = {
  SET_EVENTS: "SET_EVENTS",
  SET_TOURIST_DESTINATIONS: "SET_TOURIST_DESTINATIONS",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_HOME_CONTENT: "SET_HOME_CONTENT",
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_EVENTS:
      return { ...state, events: action.payload };
    case actionTypes.SET_TOURIST_DESTINATIONS:
      return { ...state, touristDestinations: action.payload };
    case actionTypes.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case actionTypes.SET_HOME_CONTENT:
      return { ...state, homeContent: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const initialState = {
  events: [],
  touristDestinations: [],
  categories: [],
  homeContent: [],
};

export const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_EVENTS,
      payload: shuffleArray(db.events),
    });
    dispatch({
      type: actionTypes.SET_TOURIST_DESTINATIONS,
      payload: shuffleArray(db["tourist-destinations"]),
    });
    dispatch({ type: actionTypes.SET_CATEGORIES, payload: db.categories });
    dispatch({
      type: actionTypes.SET_HOME_CONTENT,
      payload: db["home-content"],
    });
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalContextProvider;
