import styled from "styled-components";

// *Estilização container de ajuda
export const ContainerHelp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F8F9FF;
    padding-top: 6rem;
    padding-bottom: 6rem;

    @media(max-width: 800px) {
        padding: 1rem;
    }
`

// *Estilização cada ajuda
export const EachHelp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 10px;
    border-bottom: 1px solid rgba(220, 220, 220, 0.5);
    border-top: 1px solid rgba(220, 220, 220, 0.5);

    @media(max-width: 800px) {
        width: 90%;
    }
` 

export const HashTag = styled.p`
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #E51D37;
     margin-bottom: -1.7rem;
`

export const H2Help= styled.h2`
    font-family: "Sora", sans-serif;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 0em;
    color: #333333;
    padding-bottom: 3rem;   

    @media(max-width: 1564px) {
        font-size: 32px;
    }

    @media(max-width: 800px) {
        font-size: 24px;
    }
`
export const H3Help = styled.h3`
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

export const PEachHelp = styled.p`
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