import styled from "styled-components";

const StyledCategoriesDiv = styled.div`
  width: 100%;

  .categories-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: var(--background-primary);
  }

  .category-header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 2.5rem;
      color: var(--font-primary);
      margin-bottom: 0.5rem;
      font-family: var(--font-semibold);
    }

    p {
      font-size: 1.1rem;
      color: var(--font-tertiary);
      font-family: var(--font-regular);
    }
  }

  .filters-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 1rem;
  }

  .filter-button {
    background-color: ${(props) =>
      props["data-active"] ? "var(--primary)" : "var(--background-secondary)"};
    color: ${(props) =>
      props["data-active"] ? "var(--font-secondary)" : "var(--font-primary)"};
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: var(--font-medium);

    &:hover {
      background-color: ${(props) =>
        props["data-active"] ? "var(--font-emphazis)" : "var(--octonary)"};
    }
  }

  .item-list {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .item-card {
    background-color: var(--background-secondary);
    border-radius: 10px;
    box-shadow: 0 4px 6px var(--shadow-color);
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .item-content {
    padding: 1.5rem;

    h3 {
      font-size: 1.3rem;
      color: var(--font-primary);
      margin-bottom: 0.5rem;
      font-family: var(--font-semibold);
    }

    p {
      font-size: 1rem;
      color: var(--font-tertiary);
      margin-bottom: 0.5rem;
      font-family: var(--font-regular);
    }

    .item-details {
      font-size: 0.9rem;
      color: var(--font-tertiary);
      font-family: var(--font-light);
    }
  }

  /* tablet */
  @media (min-width: 768px) {
    .category-header {
      h2 {
        font-size: 2.2rem;
      }

      p {
        font-size: 1.3rem;
      }
    }

    .item-list {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  /* laptop */
  @media (min-width: 960px) {
    .item-list {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }

  /* desktop */
  @media (min-width: 1400px) {
    .category-header {
      h2 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }
`;

export default StyledCategoriesDiv;
