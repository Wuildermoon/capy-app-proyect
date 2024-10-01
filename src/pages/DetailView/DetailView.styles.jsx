import styled from "styled-components";

const StyledDetailsViewDiv = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto 30px;
  background-color: var(--senary);
  border-radius: 10px;
  box-shadow: 0 4px 8px var(--shadow-color);

  .banner {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 8px;
    color: var(--font-emphazis);
    font-family: var(--font-medium);
  }

  .date {
    font-size: 16px;
    color: var(--font-tertiary);
    margin-bottom: 16px;
  }

  .place {
    font-size: 18px;
    color: var(--font-tertiary);
    margin-bottom: 8px;
  }

  .description {
    font-size: 16px;
    color: var(--font-primary);
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
