import styled from "styled-components";

const StyledDetailsViewDiv = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px var(--primary-shadow-color);

  .banner {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 8px;
    color: var(--font-primary);
  }

  .date {
    font-size: 16px;
    color: #666;
    margin-bottom: 16px;
  }

  .place {
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
  }

  .description {
    font-size: 16px;
    color: #444;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  & > article > iframe {
    width: 100%;
    height: 450px;
    border-radius: 10px;
    border: 0;
    margin-bottom: 8px;
  }
`;

export default StyledDetailsViewDiv;
