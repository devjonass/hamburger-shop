import styled from "styled-components";
export const ListProducts = styled.div`
  margin-top: 1.875rem;
  display: flex;
  overflow-x: scroll;
  width: 100%;

  li {
    width: 19.75rem;
    border: 0.125rem solid var(--color-Grey-20);
    border-radius: 0.3125rem;
    display: flex;
    flex-direction: column;
  }

  div {
    background-color: #f5f5f5;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 11.0625rem;
    height: 11.0625rem;
  }

  p {
    padding-left: 0.625rem;
  }

  .pLiName {
    font-style: normal;
    font-weight: 700;
    font-size: var(--heading-3);
    line-height: 1.5rem;
    color: var(--color-Grey-100);
  }

  .pLiCategory {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
    color: var(--color-Grey-50);
  }

  .pLiValue {
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--color-primary);
  }

  .pResult {
    font-size: 1.125rem;
    font-weight: 700;
  }

  Button {
    width: 6.625rem;
    margin-left: 0.625rem;
    margin-bottom: 1.5625rem;
  }

  .divPositionResult {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 43.75rem) {
    overflow-y: hidden;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.25rem;
      width: 62.5rem;
      height: 100%;

      margin-left: 20%;
    }
  }
`;
