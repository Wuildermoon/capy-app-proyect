import styled from "styled-components";

const StyledFeaturedEventsSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  padding: 20px 0px;

  .featured {
    display: flex;

    & > div {
      & > button {
        padding: 0px;
        width: fit-content;
        height: fit-content;

        .nav-button {
          display: block;
          height: 30px;
          width: 30px;
          border-radius: 50px;
        }
      }
    }

    .featured-list {
      display: flex;
      flex-flow: row nowrap;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding: 10px;
      gap: 20px;

      .featured-item {
        flex: 0 0 100%;

        & > a > div {
          width: 100%;

          & > figure {
            height: 200px;
          }

          .description {
            .title {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 16px;
            }

            .date {
              font-size: 12px;
            }

            .place {
              font-size: 14px;
            }
          }
        }
      }
    }

    .featured-list::-webkit-scrollbar {
      display: none;
    }
  }

  .hurry_up {
    .hurry_up-list {
      display: flex;
      flex-flow: column nowrap;
      gap: 10px;

      .hurry_up-item > a > div {
        width: 100%;
        height: 90px;
        flex-flow: row nowrap;
        align-items: flex-start;
        gap: 10px;
        padding: 10px;

        & > figure {
          width: 40%;
          height: 100%;
        }

        .description {
          width: 60%;
          padding: 0px;

          .title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
          }

          .date {
            font-size: 12px;
          }
        }
      }
    }
  }

  /* mobile large */
  @media (480px <= width) {
  }

  /* tablet */
  @media (768px <= width) {
    flex-flow: row nowrap;

    .featured {
      width: 60%;

      .featured-list {
        .featured-item > a > div {
          & > figure {
            height: 200px;
          }
        }
      }
    }

    .hurry_up {
      width: 50%;
      gap: 5px;

      .hurry_up-list {
        gap: 10px;

        .hurry_up-item > a > div {
          height: 70px;
          gap: 5px;

          .description {
            .title {
              font-size: 14px;
            }

            .date {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  /* laptop */
  @media (960px <= width) {
    .featured {
      width: 65%;

      .featured-list {
        .featured-item > a > div {
          & > figure {
            height: 280px;
          }

          .description {
            .title {
              font-size: 18px;
            }

            .date {
              font-size: 16px;
            }
          }
        }
      }
    }

    .hurry_up {
      width: 30%;
      gap: 5px;

      .hurry_up-list {
        gap: 10px;

        .hurry_up-item > a > div {
          height: 90px;
          gap: 5px;

          .description {
            width: 60%;
            padding: 0px;
          }
        }
      }
    }
  }
  /* desktop */
  @media (1400px <= width) {
  }
`;

export default StyledFeaturedEventsSection;
