import styled, { keyframes } from "styled-components";

// *Estilização do Header
export const Header = styled.header`
  display: flex;
  width: 100%;

  @media (max-width: 1154px) {
    justify-content: space-around;
  }
`;

export const HeaderWhiteHalf = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-evenly;
  padding: 2rem;

  @media (max-width: 1064px) {
    width: 100%;
    justify-content: space-around;
    gap: 5rem;
    padding: 2rem 0rem 0rem 0rem;
  }
`;

export const HeaderRedHalf = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 2rem;
  justify-content: flex-end;
  background: linear-gradient(to left, #EB3850 14.43%, #CB162E 85.28%);

  @media (max-width: 1154px) {
    display: none;
  }
`;

export const AssetArrow = styled.img``;

// *Estilização da div tag A e asset arrow
export const TagA = styled.a`
  text-decoration: none;
  color: #333333;

  &:hover {
    color: #d03333;
  }
`;

export const DivTagAsset = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: 1000ms;

  &:hover {
    ${AssetArrow} {
      transform: rotate(180deg);
      transition: 400ms ease-in-out;
    }
  &:hover {
      ${TagA} {
        color: #d03333;
      }
  }
}
`;

// *Estilização da Ul
export const UlContainer = styled.ul`
  display: flex;
  gap: 5rem;
  list-style-type: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;

  @media (max-width: 1154px) {
    display: none;
  }
`;

export const UlOptions = styled.ul`
  display: none;
  list-style-type: none;
`;

// *Estilização da Li
export const LiOptionsHover = styled.li`
  &:hover {
    ${UlOptions} {
      display: block;
      position: absolute;
      padding: 0;
      border-radius: 9px;
      background-color: #fbf8fc;
      box-shadow: 0px 8px 25px rgba(229, 29, 55, 0.1);
      padding: 20px;
      margin-top: 0.2rem;
    }

    &:hover {
      ${AssetArrow} {
        transform: rotate(180deg);
        transition: 400ms ease-in-out;
      }
    }
  }
`;

export const EachLi = styled.li`
  padding: 0.5rem;
`;

// *Estilização da div de login
const TrembleLogin = keyframes`
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-2px);
  }

  50% {
    transform: translateY(2px);
  }

  75% {
    transform: translateY(-2px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  margin-right: 14rem;
  gap: 1rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    animation: ${TrembleLogin}  0.5s;
  }
`;

// *Estilização do Hamburguer
export const Hamburger = styled.span`
  @media (max-width: 1154px) {
    border-top: 2px solid;
    width: 20px;
    color: #000;
    &::after,
    ::before {
      content: "";
      display: block;
      width: 20px;
      height: 2px;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;
      background-color: #333333;
    }
  }
`;

// *Estilização do botão para mobile
export const BtnMobile = styled.button`
  display: none;
  @media (max-width: 1154px) {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
`;

// *Estilização da Nav
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  transition: 0.3s;

  @media (max-width: 1154px) {
    justify-content: space-around;
  }

  @media (max-width: 1154px) {
    &.active #hamburger {
      border-top-color: transparent;
      margin-top: 10px;
    }

    &.active #hamburger::before {
      transform: rotate(135deg);
      background: #000;
    }

    &.active #hamburger::after {
      transform: rotate(-135deg);
      background-color: #000;
      top: -7px;
    }

    &.active {
      ${UlContainer} {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 6rem;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &.active {
      ${DivTagAsset} {
        gap: 2rem;
      }
    }

    &.active {
      ${HeaderWhiteHalf} {
        background-color: #f7f2fa;
        align-items: flex-start;
        width: 100%;
        height: 100vh;
        z-index: 1;
        position: fixed;
      }
    }
  }
`;
