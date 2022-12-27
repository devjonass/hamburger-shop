import styled from "styled-components";

export const StyleCart = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.5);
  bottom: 0;
  .backgroundDark {
    width: 20rem;
    background-color: #f5f5f5;
    margin-left: 2.5rem;
    padding-bottom: 1.25rem;
    height: max-content;
    max-height: 28.125rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    border-radius: 0.4375rem;
    animation: modalAnimation 2s;
  }

  @keyframes modalAnimation {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .divTitleCart {
    background: var(--color-primary);
    width: 19.375rem;
    height: 4.0625rem;
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  .pTitleCart {
    color: #ffffff;
    font-weight: 700;
    font-size: 1.125rem;
    padding: 1.25rem;
  }

  .closePModal {
    padding: 0.625rem;
    color: #ffffff;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.625rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: 0.3125rem;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 6.25rem;
    background-color: #f5f5f5;
    padding: 1.25rem;
    margin-bottom: 0.625rem;
  }

  .displayAll {
    display: flex;
  }

  img {
    width: 4.375rem;
    height: 4.375rem;
  }

  .colorImg {
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.625rem;
  }

  .divPositionCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 13rem;
  }

  .buttonRemoveToCart {
    font-size: 1.5625rem;
    display: flex;
    justify-content: flex-end;
    width: 6.875rem;
  }

  .positionCardLi {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

  .pLiName {
    color: #333333;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin: 0;
    margin-bottom: 0.625rem;
  }

  .counter {
    display: flex;
    justify-content: space-between;
    width: 6.66rem;
    height: 2.125rem;
  }

  .sub {
    color: #eb5757;
    width: 100%;
    cursor: pointer;
  }

  .sum {
    color: #eb5757;
    width: 100%;
    cursor: pointer;
  }

  .pnumberCounter {
    width: 100%;
    padding: 0.625rem;
    padding-left: 1.25rem;
  }

  .trashIcon {
    font-size: 1.5625rem;
  }

  .divCartDivision {
    background-color: #e8e8e8;
    width: 17.8125rem;
    height: 0.1875rem;
    display: flex;
    margin-top: 0.625rem;
    margin-left: 1.25rem;
  }

  .divPositionTotalValue {
    display: flex;
    justify-content: space-between;
    padding: 1.25rem;
    width: 19.375rem;
  }

  .pTotal {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #333333;
  }

  .pValueCart {
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #828282;
  }

  .classButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0rem 1.25rem;
    gap: 0.625rem;
    width: 90%;
    height: 3.75rem;
    background: #e0e0e0;
    border: 0.125rem solid #e0e0e0;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    color: #828282;
    margin-left: 0.3125rem;
  }

  .pEmpty {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    text-align: center;
    color: #333333;
  }

  .spanEmpty {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
    text-align: center;
    color: #828282;
  }

  .divEmpty {
    text-align: center;
    width: 19.375rem;
  }

  @media (min-width: 43.75rem) {
    padding-right: 0.625rem;
    margin-right: 6.25rem;
    margin-top: 2.5rem;
  }

  .divTitleCart {
    width: 20rem;
  }

  .divPositionTotalValue {
    margin-left: 0.625rem;
  }
`;
