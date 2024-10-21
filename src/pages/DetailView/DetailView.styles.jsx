import styled from "styled-components";

const StyledDetailsViewDiv = styled.section`
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); /* Tres columnas con fracciones iguales */
  gap: 2rem; /* Espacio entre columnas */
  padding: 2rem;

  @media (width < 960px) {
    grid-template-columns: 1fr;
  }

  .event-details {
    padding: 1.2rem;
    background-color: var(--senary);
    border-radius: 1rem;
    box-shadow: 0 4px 8px var(--shadow-color);
    max-width: 100%;
    margin: 0 auto 2rem;

    /* Ocupa 2 columnas en pantallas grandes */
    grid-column: span 2;

    .banner {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    .title {
      font-size: 28px;
      margin-bottom: 1rem;
      color: var(--font-emphazis);
      font-family: var(--font-medium);
    }

    .info {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      gap: 1.5rem;
      padding: 0 1.2rem 1.2rem;

      .sub-section {
        display: flex;
        flex-flow: column nowrap;
        gap: 0.2rem;

        .subtitle {
          font-size: 18px;
          color: var(--font-primary);
          font-family: var(--font-medium);
        }

        .date {
          font-size: 16px;
          color: var(--font-tertiary);
        }

        .place {
          font-size: 18px;
          color: var(--font-tertiary);
        }

        .description {
          font-size: 16px;
          color: var(--font-primary);
          line-height: 1.5;
        }

        & > article {
          height: 30rem;
          & > iframe {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            border: 0;
          }
        }
      }
    }
  }

  .event-payment {
    /* Ocupa 1 columna en pantallas grandes */
    grid-column: span 1;

    /* Ocupa el 100% del ancho disponible en pantallas pequeñas */
    @media (max-width: 900px) {
      grid-column: span 1;
      width: 100%;
    }
  }
`;

export default StyledDetailsViewDiv;
