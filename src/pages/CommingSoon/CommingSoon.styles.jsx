import styled from "styled-components";

const StyledCommingSoonSection = styled.section`
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

  .soon {
    margin: 0 auto;
    font-size: 3em;
    color: var(--primary);
  }

  .message {
    width: 100%;
    margin: 0 auto;
    font-size: 1em;
  }

  .gif {
    height: 300px;
    width: 300px;
    border-radius: 40%;
    background-image: url("https://media1.tenor.com/m/zPWXNgIuyBQAAAAC/pusheen.gif");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export default StyledCommingSoonSection;
