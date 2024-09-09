import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import StyledDetailsViewDiv from "./DetailView.styles";

const DetailsView = () => {
  const { id } = useParams(); // Obtenemos el ID desde la URL
  const { events, touristDestinations } = useContext(GlobalContext);

  // Buscar en la lista de eventos
  const event = events.find((event) => event.id === id);
  // Si no se encuentra en eventos, buscar en la lista de destinos turísticos
  const destination = touristDestinations.find((dest) => dest.id === id);

  const item = event || destination;

  if (!item) {
    return <p>No se encontró el elemento.</p>;
  }

  return (
    <StyledDetailsViewDiv>
      <img className="banner" src={item.banner} alt={item.title} />
      <h2 className="title">{item.title}</h2>
      <p className="date">{item["date-long"]}</p>
      <p className="place">
        {item["place-specific"]
          ? item["place-specific"]
          : item.place || "Ubicación no disponible"}
      </p>
      <p className="description">
        {item["description-long"]
          ? item["description-long"]
          : item["description-short"] || "Descripción no disponible"}
      </p>
      <article>
        <iframe
          src={item.map}
          allowfullscreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </article>
    </StyledDetailsViewDiv>
  );
};

export default DetailsView;
