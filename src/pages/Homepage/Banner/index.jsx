import StyledBannerSection from "./Banner.styles";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation("banner");

  return (
    <StyledBannerSection>
      <div>
        <h2>{t("discover")}</h2>
        <h3>{t("best-experiences")}</h3>
      </div>
    </StyledBannerSection>
  );
};

export default Banner;
