import styled, { keyframes } from "styled-components";

export const ContainerBenefits = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F8F9FF;
    height: 80vh;
    padding: 2rem;
    gap: 20rem;

    @media(max-width: 1380px) {
        gap: 0rem;
        justify-content: space-around;
    }

    @media(max-width: 1154px) {
        justify-content: center;
    }
`

export const DivPhone = styled.div`
    @media(max-width: 1154px) {
        display: none;
    }
`

export const ImgPhone = styled.img`
    width: 20rem;

    @media(max-width: 1600px) {
        width: 15rem;
    }
`

export const AnimationIcon = keyframes`
    0%{
        transform: translate(0, 0);
        transition: ease-in-out 2;
    }
    
    50% {
        transform: translate(5%, 20%);
        transition: ease-in-out  2;
    }

    100% {
        transform: translate(0, 0);
        transition: ease-in-out  2;
    }
`

export const ImgOk = styled.img`
    position: absolute;
    margin-left: -24rem;
    margin-top: -5rem;
    animation: ${AnimationIcon}  5s infinite;

    @media(max-width: 1600px) {
        width: 7rem;
        margin-left: -18rem;
        margin-top: -3rem;
    }
`

export const ImgFav = styled.img`
    position: absolute;
    margin-left: -24rem;
    margin-top: 28rem;
    animation: ${AnimationIcon}  4s infinite;

    @media(max-width: 1600px) {
        width: 7rem;
        margin-left: -18rem;
        margin-top: 20rem;
    }
`

export const ImgCursor = styled.img`
    position: absolute;
    margin-left: -5rem;
    margin-top: 13rem;
    animation: ${AnimationIcon}  7s infinite;

    @media(max-width: 1600px) {
        width: 7rem;
        margin-left: -4rem;
        margin-top: 10rem;
    }
`




export const DivInfos = styled.div`
    display: flex;
    flex-direction: column;
`

export const DivBenefits = styled.div`
    display: flex;
    padding-top: 2rem;
    align-items: center;
    border-bottom: 1px solid rgba(220, 220, 220, 0.5);
`
const TrembleIconBenefit = keyframes`
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

export const IconBenefit = styled.img`
    &:hover {
        animation: ${TrembleIconBenefit}  0.5s;
    }
`

export const H2Benefits = styled.h2`
    font-family: 'Sora', sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 45px;
    margin-left: 2rem;

    @media(max-width: 1600px) {
        font-size: 32px;
    }

    @media(max-width: 1154px) {
        font-size: 24px;
    }
`

export const RedSpan = styled.span`
    color: #E51D37;
`

export const PBenefits = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: #868587;
    margin-left: 2rem;
    margin-top: -1rem;

    @media(max-width: 1600px) {
        font-size: 16px
    }
`

export const H3Benefits = styled.h3`
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    margin-top: -0.2rem;

    @media(max-width: 1600px) {
        font-size: 20px
    }

    @media(max-width: 1154px) {
        font-size: 16px;
    }
`

export const PEachBenefit = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 17px;
    margin-top: -0.7rem;
    color: #868587;

    @media(max-width: 1600px) {
        font-size: 16px
    }

    @media(max-width: 1154px) {
        font-size: 14px;
    }
`