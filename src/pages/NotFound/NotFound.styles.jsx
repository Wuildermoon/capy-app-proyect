import styled from "styled-components";
import alien_pusheens from "../../assets/img/alien-pusheens.gif";

const StyledNotFoundSection = styled.section`
  height: 80vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;

  .container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5px;
  }

  .error {
    margin: 0 auto;
    font-size: 5em;
    color: var(--font-emphazis);
  }

  .text_error {
    width: 100%;
    margin: 0 auto;
    font-size: 2em;
    color: var(--font-primary);
  }

  .text_joke {
    width: 100%;
    margin: 0 auto;
    height: 1em;
    font-size: 1em;
    color: var(--font-primary);
  }

  .error_gif {
    height: 300px;
    width: 300px;
    border-radius: 40%;
    background-image: url(${alien_pusheens});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export default StyledNotFoundSection;
