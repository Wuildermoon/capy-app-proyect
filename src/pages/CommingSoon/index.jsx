import StyledMain from "../Homepage/Homepage.styles";
import StyledCommingSoonSection from "./CommingSoon.styles";

const CommingSoon = () => {
  return (
    <StyledMain>
      <StyledCommingSoonSection>
        <div className="container">
          <h2 className={"soon"}>Próximamente</h2>
          <p className={"message"}>
            Nos descubriste, esta funcionalidad aun esta en desarrollo, pero no
            te preocupes, estara lista muy pronto.
          </p>
        </div>
        <figure className="gif" />
      </StyledCommingSoonSection>
    </StyledMain>
  );
};

export default CommingSoon;
