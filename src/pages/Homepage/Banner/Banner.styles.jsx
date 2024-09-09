import styled from "styled-components";
import banner_01 from "../../../assets/img/banners/banner_01.png";

const StyledBannerSection = styled.section`
  /* mobile */
  height: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 0px;
  margin: 10px 0px 20px;
  background-image: url(${banner_01});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 2px var(--primary-shadow-color);

  & > div {
    height: 100%;
    width: 65%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column nowrap;
    padding-left: 10px;
    background-color: var(--background-secondary);
    border-radius: 0px 100px 100px 0px;

    & > h2 {
      font-family: var(--montserrat-alternates-bold);
      font-size: 24px;
      color: var(--primary);
    }

    & > h3 {
      font-family: var(--font-alternative);
      font-size: 16px;
      color: var(--font-tertiary);
    }
  }

  /* mobile large */
  @media (480px <= width) {
  }

  /* tablet */
  @media (768px <= width) {
    height: 260px;
    padding: 40px 0px;
    border-radius: 24px;

    & > div {
      height: 100%;
      width: 70%;
      padding-left: 40px;

      & > h2 {
        font-size: 48px;
      }

      & > h3 {
        font-size: 32px;
      }
    }
  }

  /* laptop */
  @media (960px <= width) {
    height: 300px;
    padding: 50px 0px;

    & > div {
      height: 100%;
      width: 50%;
      padding-left: 40px;

      & > h2 {
        font-size: 50px;
      }

      & > h3 {
        font-size: 36px;
      }
    }
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

export default StyledBannerSection;
