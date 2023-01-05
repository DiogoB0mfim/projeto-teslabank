import * as S from "../../styles/HeroStyled"
import cardFront from "../../assets/card-front.png"
import cardBack from "../../assets/card-back.png"
import playstore from "../../assets/icon-playstore.png"
import applestore from "../../assets/icon-applestore.png"

const Hero = () => {
    return (
        <>
            <S.HeroContainer>
                <S.WhiteHalfHero>
                    <S.WhiteHafInfos>
                        <S.H1WhiteHalf>TeslaBank <br/> Banco 100% digital</S.H1WhiteHalf>
                        <S.PWhiteHalf>Abrir uma conta digital nunca foi tão simples!</S.PWhiteHalf>
                        <S.DivButtons>
                            <S.BtnAccount>Abrir uma conta</S.BtnAccount>
                            <img src={applestore} alt="icone playstore" />
                            <img src={playstore} alt="icone apple store" />
                        </S.DivButtons>
                    </S.WhiteHafInfos>
                </S.WhiteHalfHero>
                <S.RedHalfHero>
                    <S.DivCards>
                        <S.CardFront src={cardFront} alt="parte da frente cartao" />
                        <S.CardBack src={cardBack} alt="parte de trás cartao" />
                    </S.DivCards>
                </S.RedHalfHero>
            </S.HeroContainer>
        </>
    )
}

export default Hero;