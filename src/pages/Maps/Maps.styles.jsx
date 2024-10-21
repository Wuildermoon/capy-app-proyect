import styled from "styled-components";

const StyledMapsDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  & > iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export default StyledMapsDiv;
