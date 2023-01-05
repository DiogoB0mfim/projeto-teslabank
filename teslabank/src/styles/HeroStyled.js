import styled, { keyframes } from "styled-components";

// *Estilização do container da Hero Section
export const HeroContainer = styled.div`
    display: flex;
    width: 100%;
    height: 86.9vh;
    
    @media(max-width: 1062px) {
        justify-content: center;
    }
`;

// *Estilização da metade branca da hero
export const WhiteHalfHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55%;

    @media(max-width: 1062px) {
        width: 90%;
    }
`;

export const WhiteHafInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    @media(max-width: 600px) {
        width: 90%;
        margin-bottom: 2rem;
    }
`;

export const H1WhiteHalf = styled.h1`
    font-family: 'Sora', sans-serif;
    font-weight: 600;
    font-size: 64px;
    color: #E51D37;

    @media(max-width: 1190px) {
        font-size: 48px;
    }

    @media(max-width: 600px) {
        font-size: 32px;
        margin-bottom: 40px;
    }
`;

export const PWhiteHalf = styled.p`
    font-size: 24px;
    font-weight: 500;
    color: #333333;
    margin-top: -19px;

    @media(max-width: 600px) {
        font-size: 22px;
    }
`;

// *Estilização da div de botões da metade branca da hero
export const DivButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 2rem;
`;

const TrembleStore = keyframes`
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

export const ImgStore = styled.img`
    cursor: pointer;
    &:hover {
        animation: ${TrembleStore}  0.5s;
    }
`;

export const BtnAccount = styled.button`
  background: linear-gradient(220.94deg, #EB3850 14.43%, #CB162E 85.28%); 
  width: 274px;
  border: none;
  border-radius: 4px;
  color: #ffff;
  padding: 12px 32px;
  font-weight: 500;
  cursor: pointer;
  transform: skew(0deg);
  font-size: 1.1rem;
  &:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 0;
    height: 100%;
    background-color: #272727;
    z-index: -1;
    transition: 1000ms;
    border-radius: 4px;
  }
  &:hover::before {
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

// *Estilização da metade vermelha da hero
export const RedHalfHero = styled.div`
    display: flex;
    width: 45%;
    padding: 0.35rem;
    background-image: linear-gradient(to left,  #eb3850 14.43%, #cb162e 95.28%);

    @media(max-width: 1064px) {
        display: none;
    }
`;

export const DivCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 9.375rem;
    width: 100%;
`;

const animationCardFront = keyframes`
    0%{
        transform: rotate(0deg) translateY(0);
        transition: ease-in-out 2;
    }
    
    50% {
        transform: rotate(5deg) translateY(20%);
        transition: ease-in-out  2;
    }

    100% {
        transform: rotate(0deg) translateY(0);
        transition: ease-in-out  2;
    }
`;

const animationCardBack = keyframes`
    0%{
        transform: rotate(0) translateY(0);
        transition: ease-in-out 2;
    }
    
    50% {
        transform: rotate(5deg) translateY(20%);
        transition: ease-in-out  2;
    }

    100% {
        transform: rotate(0) translateY(0);
        transition: ease-in-out  2;
    }
`;

export const CardFront = styled.img`
    position: absolute;
    z-index: 1;
    margin-right: 18.75rem;
    width: 23%;
    animation: ${animationCardFront}  6s infinite;

    @media(max-width: 1540px) {
        margin-right: 15rem;
    }

    @media(max-width: 1350px) {
        margin-right: 13rem;
    }
`;

export const CardBack = styled.img`
    position: absolute;
    margin-left: 15.625rem;
    margin-top: 7.5rem;
    width: 26%;
    animation: ${animationCardBack}  6s infinite;

    @media(max-width: 1540px) {
        margin-left: 13rem;
    }

    @media(max-width: 1350px) {
        margin-right: 7rem;
    }
`;



