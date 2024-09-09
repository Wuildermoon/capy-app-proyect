import styled from "styled-components";

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
    color: red;
  }

  .text_error {
    width: 100%;
    margin: 0 auto;
    font-size: 2em;
  }

  .text_joke {
    width: 100%;
    margin: 0 auto;
    height: 1em;
    font-size: 1em;
  }

  .error_gif {
    height: 300px;
    width: 300px;
    border-radius: 40%;
    background-image: url("https://media.tenor.com/BhKFqglpjY4AAAAi/alien-pusheens.gif");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export default StyledNotFoundSection;
