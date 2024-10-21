import StyledMapsDiv from "./Maps.styles";

const Maps = () => {
  return (
    <StyledMapsDiv>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120148.28074954657!2d-76.60823789656165!3d3.3950608824384596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e1!3m2!1ses!2sco!4v1729521122778!5m2!1ses!2sco"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </StyledMapsDiv>
  );
};

export default Maps;
