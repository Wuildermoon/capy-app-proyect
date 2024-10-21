import styled from "styled-components";

const StyledTicketSelectorDiv = styled.div`
  max-width: 100%;
  background: var(--background-secondary);
  border-radius: 1rem;
  box-shadow: var(--shadow-color);
  margin: 0 auto;

  .content {
    padding: 1rem;

    .ticket-container {
      border: 2px solid var(--secondary);
      border-radius: 0.5rem;
      padding: 16px;

      .ticket-header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 8px;

        .ticket-name {
          font-family: var(--font-medium);
          color: var(--font-primary);
          font-size: 1rem;
        }

        .counter {
          width: 100%;
          max-width: 6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;

          .counter-quantity {
            font-size: 1rem;
            font-family: var(--font-semibold);
            color: var(--font-primary);
          }
        }
      }

      .ticket-price {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        margin-top: 0.5rem;

        .price {
          font-family: var(--font-semibold);
          color: var(--font-primary);
          font-size: 1rem;
        }

        .info-icon {
          font-size: 1rem;
          cursor: pointer;
          position: relative;

          & > svg {
            stroke: var(--font-primary);
            width: 1rem;
            height: 1rem;
          }

          &::after {
            content: attr(data-tooltip);
            position: absolute;
            width: max-content;
            max-width: 200px;
            background-color: var(--background-secondary);
            border: 1px solid var(--secondary);
            color: var(--font-primary);
            padding: 5px;
            border-radius: 4px;
            white-space: normal;
            font-size: 12px;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease-in-out;
          }

          &:hover::after {
            opacity: 1;
          }
        }
      }
    }
  }

  .checkout {
    border: none;
    border-radius: 8px;
    padding: 1rem;

    .checkout-button {
      width: 100%;
      padding: 0.8rem;
      background-color: var(--primary);
      color: var(--font-secondary);
      border: 1px solid var(--primary);
      border-radius: 8px;
      font-family: var(--font-medium);
      cursor: pointer;
      transition: 100ms ease;
      font-size: 1rem;

      &:hover {
        background-color: var(--senary);
        color: var(--font-emphazis);
      }
    }
  }

  @media (480px <= width) {
    min-width: 400px;

    .content .ticket-container .ticket-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (768px <= width) {
    .content .ticket-container {
      .ticket-header {
        .ticket-name {
          font-size: 1.125rem;
        }
        .counter .counter-quantity {
          font-size: 1.125rem;
        }
      }
      .ticket-price .price {
        font-size: 1.125rem;
      }
      .info-icon::after {
        white-space: nowrap;
        max-width: none;
      }
    }
    .checkout .checkout-button {
      font-size: 1.125rem;
    }
  }
`;

export const CounterButton = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  border: 1px solid var(--primary);
  background-color: var(--senary);
  color: var(--font-emphazis);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 100ms ease;
  font-size: 1rem;

  &:hover {
    background-color: var(--primary);
    color: var(--font-secondary);
  }

  @media (768px <= width) {
    width: 2rem;
    height: 2rem;
    font-size: 1.125rem;
  }
`;

export default StyledTicketSelectorDiv;
