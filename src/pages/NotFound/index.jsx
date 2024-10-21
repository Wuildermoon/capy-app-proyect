import { useTranslation } from "react-i18next";
import StyledMain from "../Homepage/Homepage.styles";
import StyledNotFoundSection from "./NotFound.styles";

const NotFound = () => {
  const { t } = useTranslation("page-not-found");

  return (
    <StyledMain>
      <StyledNotFoundSection>
        <div className="container">
          <h2 className={"error"}>404</h2>
          <h3 className={"text_error"}>{t("text-error")}</h3>
          <p className={"text_joke"}>{t("text-joke")}</p>
        </div>
        <figure className="error_gif" />
      </StyledNotFoundSection>
    </StyledMain>
  );
};

export default NotFound;
