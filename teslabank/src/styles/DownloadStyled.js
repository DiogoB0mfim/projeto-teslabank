import styled, { keyframes } from "styled-components";

// *Estilização container de download
export const ContainerDownload = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9rem;
    padding-top: 8rem;
    padding-bottom: 8rem;

    @media(max-width: 1564px) {
        gap: 15rem;
    }

    @media(max-width: 1200px) {
        gap: 0rem;
    }
`

// *Estilização div de informações
export const DivInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media(max-width: 800px) {
        width: 90%;
    }
`

export const DivBtnDownload = styled.div`
    display: flex;
    gap: 2rem;
    background-color: blue;

    @media (max-width: 800px) {
        justify-content: center;
    }
`

export const H2Download = styled.h2`
    font-family: "Sora", sans-serif;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 0em;
    color: #333333;

    @media(max-width: 1564px) {
        font-size: 32px;
    }

    @media(max-width: 800px) {
        width: 100%;
        font-size: 24px;
    }
`

export const PDownload = styled.p`
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    color: #868587;
    margin-top: -2rem;
    padding-top: 1rem;

    @media(max-width: 1564px) {
        font-size: 22px;
    }

    @media(max-width: 800px) {
        font-size: 18px;
    }
`

export const RedSpan = styled.span`
    color: #E51D37;
`

// *Estilização img logo
export const ImgTesla = styled.img`
    width: 350px;

    @media(max-width: 1200px) {
        display: none;
    }
`

const Tremble = keyframes`
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

export const ImgBtn = styled.img`
    cursor: pointer;

    &:hover {
        animation: ${Tremble}  0.5s;
    }

    @media(max-width: 800px) {
        width: 40%;
    }
`
