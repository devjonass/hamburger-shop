import styled from "styled-components";
import picBall from "../../assets/img/picBall.png";
export const RegisterStyle = styled.div`
  padding: 1.25rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  h1 {
    span {
      font-size: 1.25rem;
      color: var(--color-secondary);
    }
  }
  header {
    display: flex;
    justify-content: space-between;
  }
  .pRegisterHeader {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.375rem;
    text-decoration-line: underline;
    color: #828282;
  }
  .boxLogin {
    border-radius: 0.3125rem;
    border: 0.0625rem solid var(--color-Grey-20);
    display: flex;
    gap: 1.25rem;
    padding: 0.9375rem;
    span {
      font-weight: bold;
      color: black;
    }
  }
  .boxIcon {
    background: rgba(39, 174, 96, 0.1);
    width: 3.75rem;
    height: 3.75rem;
  }
  .icon {
    color: var(--color-primary);
    width: 1.5rem;
    height: 1.5rem;
    padding: 1.125rem;
  }
  .pBox {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: var(--color-Grey-50);
  }
  .erroMessage {
    color: var(--color-secondary);
    font-size: 0.9375rem;
    font-weight: 600;
  }
  form {
    border-radius: 0.3125rem;
    padding: 1.25rem;
    border: 0.0625rem solid var(--color-Grey-20);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    label {
      display: flex;
      flex-direction: column;
      font-size: 0.75rem;
      color: #999999;

      span {
        position: relative;
        background-color: #ffffff;
        width: max-content;
        padding: 0rem 0.3125rem;
        top: 0.5rem;
        left: 0.3125rem;
      }
    }
    input {
      background: #ffffff;
      border: 0.125rem solid #333333;
      border-radius: 0.3125rem;
      width: 100%;
      padding: 0.9375rem;
      margin: 0 auto;
    }
    .positionFormInput {
      display: flex;
      flex-direction: column;
      gap: 0.3125rem;
    }
    .pFormCreate {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.125rem;
      text-align: center;
      color: #999999;
    }
    .buttonRegister {
      background: #f5f5f5;
      border-radius: 0.5rem;
      color: var(--color-Grey-50);
      border: none;
    }
  }
  .display {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  @media (min-width: 43.75rem) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    gap: 3.125rem;
    height: 100vh;
    .imgDisplay {
      background-image: url(${picBall});
      background-size: cover;
      height: 5.6875rem;
      width: 13.125rem;
    }
    .boxLogin {
      width: 23.5625rem;
      height: 5.9375rem;
    }
    form {
      width: 31.25rem;
      height: max-content;
    }
  }
`;
