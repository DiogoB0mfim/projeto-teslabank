import styled from "styled-components";

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 1rem;
`

export const HashTag = styled.p`
    margin-right: 64.2rem;
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 21.78px;
    color: #E51D37;

    @media(max-width: 1154px) {
        align-items: center;
        margin-right: 0rem;
    }

    @media(max-width: 600px) {
        margin-right: 15.4rem;
    }
`

export const RedSpan = styled.span`
    color: #E51D37;
`

export const Title = styled.h2`
    margin-top: -1rem;
    margin-right: 47rem;
    font-family: 'Sora', sans-serif;
    font-weight: 600;
    font-size: 40px;
    line-height: 45.36px;
    color: #333333;

    @media(max-width: 1154px) {
        align-items: center;
        margin-right: 0rem;
    }

    @media(max-width: 600px) {
        align-items: center;
        font-size: 32px;
        margin-right: 3rem;
    }
`

export const ContainerAdvantages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 2rem;
    
`

export const DivAllAdvantage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media(max-width: 1154px) {
        grid-template-columns: 1fr;
    }
`

export const EachAdvantage = styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 2rem;
    background-color: #ffff;
    border-radius: 5px;
`

export const H3Advantage = styled.h3`
    font-family: 'Sora', sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.014em;
    text-align: left;

`

export const PAdvantage = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-top: -0.7rem;
    color: #868587;
    text-align: justify;

`

export const AnchorAdvantage = styled.a`
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.014em;
    text-align: left;
    color: #E51D37;

`