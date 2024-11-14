import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../contexts/GlobalContext";
import StyledCategoriesDiv from "./Categories.styles";
import Card from "../../components/Card";

const Categories = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useContext(GlobalContext);
  const { t } = useTranslation("categories");
  const { events, touristDestinations, categories } = state;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemType, setItemType] = useState("all");

  useEffect(() => {
    const category = categories.find((category) => category.name === id);
    if (!category) {
      navigate("/404", { replace: true });
      return;
    }
    setSelectedCategory(category);

    const filterItems = () => {
      const allItems = [...events, ...touristDestinations];
      if (id === "see-all") {
        return allItems;
      }
      return allItems.filter((item) => item.category.includes(id));
    };

    setFilteredItems(filterItems());
  }, [id, categories, events, touristDestinations, navigate]);

  const handleItemTypeChange = (type) => {
    setItemType(type);
    let items = [];

    if (id === "see-all") {
      items =
        type === "all"
          ? [...events, ...touristDestinations]
          : type === "events"
          ? events
          : touristDestinations;
    } else {
      switch (type) {
        case "events":
          items = events.filter((event) => event.category.includes(id));
          break;
        case "destinations":
          items = touristDestinations.filter((destination) =>
            destination.category.includes(id),
          );
          break;
        default:
          items = [...events, ...touristDestinations].filter((item) =>
            item.category.includes(id),
          );
      }
    }
    setFilteredItems(items);
  };

  if (!selectedCategory) {
    return null;
  }

  return (
    <StyledCategoriesDiv>
      <div className="categories-container">
        <div className="category-header">
          <h2>{t(selectedCategory.name)}</h2>
          <p>{t(selectedCategory.description)}</p>
        </div>
        <div className="filters-bar">
          <button
            className="filter-button"
            data-active={itemType === "all"}
            onClick={() => handleItemTypeChange("all")}
          >
            {t("all")}
          </button>
          <button
            className="filter-button"
            data-active={itemType === "events"}
            onClick={() => handleItemTypeChange("events")}
          >
            {t("events")}
          </button>
          <button
            className="filter-button"
            data-active={itemType === "destinations"}
            onClick={() => handleItemTypeChange("destinations")}
          >
            {t("destinations")}
          </button>
        </div>
        <ul className="item-list">
          {filteredItems.map((item, index) => {
            const isTouristDestinations = touristDestinations.includes(item);
            return (
              <li
                key={index}
                className={`list-item ${
                  isTouristDestinations ? "tourist-item" : "event-item"
                }`}
                aria-label={t("label", { x: item.title })}
              >
                <Link
                  to={`/${isTouristDestinations ? "tourism" : "events"}/${
                    item.id
                  }`}
                >
                  <Card {...item} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledCategoriesDiv>
  );
};

export default Categories;
