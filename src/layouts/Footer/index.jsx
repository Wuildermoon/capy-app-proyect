import { useTranslation } from "react-i18next";
import StyledFooter from "./Footer.styles";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Logo from "../../components/Logo";
import Cop16Banner from "../../assets/img/cop16-banner";
import ACLogo from "../../assets/img/american-capy-logo.png";
import Facebook_Icon from "../../assets/icons/facebook";
import Instagram_Icon from "../../assets/icons/instagram";
import Tiktok_Icon from "../../assets/icons/tiktok";
import Youtube_Icon from "../../assets/icons/youtube";

const Footer = () => {
  const { state } = useContext(GlobalContext);
  const { footerInfo } = state;
  const { t } = useTranslation("footer");
  return (
    <StyledFooter>
      <div className="container">
        <Logo />
        <section className="info">
          <div className="list-container american_capy-container">
            <ul className={`list american_capy-list`}>
              <li className="list-item">
                <h3 className="title">{t("capy.developed")}</h3>
                <h3>
                  <img
                    src={ACLogo}
                    alt="American Capy logo"
                    className="company-logo"
                  />
                </h3>
              </li>
            </ul>
            <ul className="list developed">
              <li className="list-item">
                <h3 className="title">{t("capy.follow-us")}</h3>
                <ul className="social-list">
                  <li className="social-item">
                    <a
                      href="https://www.facebook.com/profile.php?id=61565481539408"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook_Icon />
                    </a>
                  </li>
                  <li className="social-item">
                    <a
                      href="https://www.instagram.com/american_capy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram_Icon />
                    </a>
                  </li>
                  <li className="social-item">
                    <a
                      href="https://www.tiktok.com/@american_capy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Tiktok_Icon />
                    </a>
                  </li>
                  <li className="social-item">
                    <a
                      href="https://www.youtube.com/@AmericanCapy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube_Icon />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {footerInfo &&
            footerInfo.map((item) => {
              return (
                <div
                  className={`list-container ${item.id}-container`}
                  key={item.id}
                >
                  <h3 className="title">{t(item.title)}</h3>
                  <ul className={`list ${item.id}-list`}>
                    {item.content.map((item, index) => {
                      return (
                        <li className="list-item" key={index}>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t(item.text)}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          <div className="list-container cop16-container">
            <ul className={`list cop16-list`}>
              <h3 className="title">{t("committed")}</h3>
              <li className="list-item">
                <Cop16Banner />
              </li>
            </ul>
          </div>
        </section>
        <div className="copyright">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
