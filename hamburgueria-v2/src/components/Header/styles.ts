import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext";

export const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 1.25rem;
  .divPositionTitle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pHeader {
    font-size: var(--heading-1);
    font-weight: bold;
  }
  span {
    color: var(--color-secondary);
    font-size: var(--heading-3);
  }
  input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0rem 0.625rem 0rem 0.9375rem;
    gap: 7.1875rem;
    width: 90%;
    height: 3.75rem;
    border: 0.125rem solid #e0e0e0;
    border-radius: 0.5rem;
    margin-left: 2.5rem;
    background-color: #ffffff;
    margin-bottom: 1.25rem;
    margin-right: 0.625rem;
  }

  input::placeholder {
    color: #e7e7e7;
    font-size: 0.9375rem;
  }
  .positionInputButton {
    display: flex;
    align-items: center;
    position: relative;
  }
  .buttonComp {
    position: absolute;
    right: 10%;
    top: 13%;
  }
  .iconStyle {
    font-size: 1.875rem;
    display: flex;
    gap: 1.25rem;
    color: #bdbdbd;
  }
  .cursor {
    cursor: pointer;
  }
  .relativeDiv {
    position: relative;
    display: flex;
  }
  .closeSearch {
    background-color: gray;
    width: 1.4375rem;
    border-radius: 50%;
    height: 1.4375rem;
    color: white;
    text-align: center;
    padding: 0.1875rem;
    cursor: pointer;
  }
  .positionAllIcon {
    display: flex;
    justify-content: space-between;
  }
  .positionIconCounter {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .pCounterCart {
    font-size: 0.8125rem;
    background-color: var(--color-primary);
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.3125rem;
    text-align: center;
    padding: 0.0625rem;
    font-weight: 900;
    color: white;
    position: absolute;
    bottom: 75%;
    left: 70%;
  }

  @media (min-width: 43.75rem) {
    .positionAll {
      display: flex;

      width: 100%;
      justify-content: space-between;
    }
    .iconStyle {
      padding: 0rem 2.5rem;
    }
    .positionAllIcon {
      width: 100%;
      padding: 0rem 0rem;
    }

    .pHeader {
      margin-left: 2.75rem;
    }
    .divPositionTitle {
      margin-left: 5rem;
    }
  }
`;
