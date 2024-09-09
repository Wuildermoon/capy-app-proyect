import StyledMain from "../Homepage/Homepage.styles";
import StyledNotFoundSection from "./NotFound.styles";

const NotFound = () => {
  return (
    <StyledMain>
      <StyledNotFoundSection>
        <div className="container">
          <h2 className={"error"}>404</h2>
          <h3 className={"text_error"}>Página no encontrada</h3>
          <p className={"text_joke"}>¿A dónde ibas, ve?</p>
        </div>
        <figure className="error_gif" />
      </StyledNotFoundSection>
    </StyledMain>
  );
};

export default NotFound;
