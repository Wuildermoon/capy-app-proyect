import styled from "styled-components";

const StyledEventContentSection = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 20px;

  & > section {
    width: 100%;

    & > div > button {
      padding: 0px;
      height: fit-content;
      width: fit-content;

      .nav-button {
        display: block;
        height: 30px;
        width: 30px;
        border-radius: 50px;
      }
    }

    .list {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding: 20px 10px;
      gap: 15px;

      .list-item {
        flex: 1 0 45%;

        & > a > div {
          & > figure {
            height: 120px;
          }
        }
      }
    }

    .list::-webkit-scrollbar {
      display: none;
    }
  }

  .made_for_you,
  .get_to_know_the_city {
    .list {
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: center;
      overflow-x: hidden;
      scroll-behavior: inherit;
      padding: 20px 0px;
    }
  }

  .you_might_like {
    .list {
      padding: 20px 0px;
      gap: 20px;
    }
  }

  .get_to_know_the_city {
    .list {
      .list-item {
        & > a > div {
          & > figure {
            height: 150px;
          }
        }
      }
    }
  }

  /* tablet */
  @media (768px <= width) {
    & > section {
      .list {
        .list-item {
          flex: 0 0 31%;
        }
      }
    }
  }

  /* laptop */
  @media (960px <= width) {
    & > section {
      .list {
        gap: 20px;

        .list-item {
          flex: 1 0 23%;

          & > a > div {
            & > figure {
              height: 150px;
            }
          }
        }
      }
    }

    .made_for_you,
    .get_to_know_the_city {
      .list {
        justify-content: flex-start;
      }
    }

    .get_to_know_the_city {
      .list {
        .list-item {
          flex: 1 0 31%;

          & > a > div {
            & > figure {
              height: 200px;
            }
          }
        }
      }
    }
  }
`;

export default StyledEventContentSection;
