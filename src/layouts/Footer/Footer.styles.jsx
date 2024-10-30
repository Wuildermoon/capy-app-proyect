import styled from "styled-components";
import PusheenAndCapybaraWalk from "../../assets/img/pusheen-and-capybara-walk.gif";

const StyledFooter = styled.footer`
  /* mobile */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
    padding: 16px 20px;
    margin: 0px 10px 80px;
    background-color: var(--background-secondary);
    border-radius: 20px;
    box-shadow: 0px -4px 10px -3px var(--shadow-color);
    overflow-y: unset;

    & > a > h1 {
      width: 100%;
      font-size: 2.5rem;
    }

    .info {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      gap: 1rem;

      .list-container {
        display: flex;
        align-items: center;
        flex-flow: column nowrap;

        .american_capy-list {
          gap: 1rem;
          .company-logo {
            width: 14rem;
            height: 14rem;
          }
        }

        .developed {
          .social-list {
            display: flex;
            flex-flow: row nowrap;
            gap: 0.5rem;

            .social-item {
              & > a > svg {
                width: 1.5rem;
                height: 1.5rem;
                fill: var(--font-primary);

                & > path {
                  fill: var(--font-primary);
                }
              }
            }
          }
        }

        .title {
          width: 100%;
          font-family: var(--font-medium);
          font-size: 1rem;
          color: var(--font-primary);
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .list {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-flow: column nowrap;

          .list-item {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column nowrap;

            & > a {
              font-family: var(--font-regular);
              font-size: 0.8rem;
              color: var(--font-tertiary);
            }
          }
        }
      }

      .cop16-container {
        .list {
          .list-item {
            width: 12rem;
          }
        }
      }
    }

    .copyright {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--font-primary);
      text-align: center;
      font-size: 0.8rem;
    }
  }

  /* tablet */
  @media (768px <= width) {
    .container {
      margin: 0px 15px 25px 115px;

      & > a > h1 {
        font-size: 2.5rem;
      }

      .info {
        height: 24rem;
        flex-flow: column wrap;
        align-content: space-evenly;
      }

      .cop16-container {
        .list {
          .list-item {
            width: 11rem;
          }
        }
      }
    }
  }

  /* laptop */
  @media (960px <= width) {
    .container {
      margin: 0px 40px 20px;

      & > a > h1 {
        font-size: 3rem;
      }

      .info {
        justify-content: space-evenly;
        height: 24rem;
        flex-flow: row wrap;
        align-content: space-evenly;

        .about-container,
        .support-container {
          .title {
            text-align: left;
          }

          .about-list,
          .support-list {
            align-items: flex-start;
          }
        }

        .cop16-container {
          .list {
            .list-item {
              width: 14rem;
            }
          }
        }
      }
    }
  }

  /* desktop */
  @media (1400px <= width) {
  }
`;

export default StyledFooter;
