import { useTranslation } from "react-i18next";
import StyledMain from "../Homepage/Homepage.styles";
import StyledCommingSoonSection from "./CommingSoon.styles";

const CommingSoon = () => {
  const { t } = useTranslation("comming-soon");
  return (
    <StyledMain>
      <StyledCommingSoonSection>
        <div className="container">
          <h2 className={"soon"}>{t("soon")}</h2>
          <p className={"message"}>{t("message")}</p>
        </div>
        <figure className="gif" />
      </StyledCommingSoonSection>
    </StyledMain>
  );
};

export default CommingSoon;
