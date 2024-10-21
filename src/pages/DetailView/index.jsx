import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../contexts/GlobalContext";
import StyledDetailsViewDiv from "./DetailView.styles";
import TicketSelector from "../../components/TicketSelector";

const DetailsView = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);
  const { t } = useTranslation("details-view");
  const { events, touristDestinations } = state;

  const event = events.find((event) => event.id === id);
  const destination = touristDestinations.find((dest) => dest.id === id);

  const item = event || destination;

  if (!item) {
    return <p>{t("not-found")}</p>;
  }

  return (
    <StyledDetailsViewDiv>
      <section className="event-details">
        <img className="banner" src={item.banner} alt={item.title} />
        <h2 className="title">{item.title}</h2>
        <div className="info">
          <div className="sub-section">
            <h3 className="subtitle">{t("date")}</h3>
            <p className="date">
              {item["date-long"] ? item["date-long"] : t("date-not-specified")}
            </p>
          </div>
          <div className="sub-section">
            <h3 className="subtitle">{t("place")}</h3>
            <p className="place">{item.place ? item.place : ""}</p>
            <p className="place">
              {item["place-specific"] ? item["place-specific"] : ""}
            </p>
            <p className="place">
              {!item.place && !item["place-specific"]
                ? t("place-not-specified")
                : ""}
            </p>
          </div>
          <div className="sub-section">
            <h3 className="subtitle">{t("description")}</h3>
            <p className="description">
              {item["description-long"]
                ? item["description-long"]
                : item["description-short"] || t("description-not-available")}
            </p>
          </div>
          <div className="sub-section">
            <h3 className="subtitle">{t("location")}</h3>
            <article>
              <iframe
                src={item.map}
                allowfullscreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </article>
          </div>
        </div>
      </section>
      <section className="event-payment">
        <TicketSelector ticketName={item.title} price={item.price} />
      </section>
    </StyledDetailsViewDiv>
  );
};

export default DetailsView;
