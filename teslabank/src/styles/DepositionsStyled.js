import styled from "styled-components";

// *Estilização container depositions
export const ContainerDepositions = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F8F9FF;
    padding-top: 8rem;
    padding-bottom: 8rem;
    align-items: center;
`

// *Estilização container de titulo
export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 1rem;

    @media(max-width: 800px) {
        align-items: flex-start;
        justify-content: center;
        width: 90%;
    }
`

export const HashTag = styled.p`
    margin-right: 64.2rem;
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #E51D37;

    @media (max-width: 1351px) {
        margin-right: 25.2rem;
    }

    @media(max-width: 800px) {
        margin-right: 0rem;
    }
`

export const H2Depositions = styled.h2`
    font-family: 'Sora', sans-serif;
    font-weight: 400;
    font-size: 40px;
    color: #333333;
    margin-top: -1rem;
    width: 42rem;
    margin-right: 32rem;

    @media (max-width: 1564px) {
        font-size: 32px;
        margin-right: 32rem;
    }

    @media (max-width: 1351px) {
        flex-direction: column;
        margin-right: 0rem;
        margin-left: 7rem;
    }

    @media (max-width: 800px) {
        margin-left: 0rem;
        width: 100%;
        font-size: 24px;
    }
`

// *Estilização container comentários
export const DivComments = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin-left: 10.6rem;
    flex-wrap: wrap; 

    @media (max-width: 1564px) {
        margin-left: 5.5rem;
    }

    @media (max-width: 1351px) {
        flex-direction: column;
        margin-left: 0rem;
    }
`

export const EachComment = styled.div`
    @media (max-width: 1351px) {
        border-bottom: 1px solid rgba(220, 220, 220, 0.5);
    }
`

export const H3Comments = styled.h3`
    font-family: 'Sora', sans-serif;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    font-size: 20px;
    border-left: 3px solid red;
    padding-left: 0.5em;
    transition: 100ms ease-in-out;

    &:hover {
        border-left: 6px solid red;
    }

    @media (max-width: 1564px) {
        font-size: 18px;
    }
`

export const PComments = styled.h3`
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #868587;

    @media (max-width: 1564px) {
        font-size: 15px;
    }  
`