import * as S from "../../styles/AdvantagesStyled"
import card from "../../assets/credit-card.png"
import clock from "../../assets/clock.png"
import percent from "../../assets/percent.png"
import gift from "../../assets/gift.png"
import shield from "../../assets/shield.png"
import cart from "../../assets/shopping-cart.png"


const Advantages = () => {
    return (
        <>  
            <S.ContainerAdvantages>
                <S.ContainerTitle>
                    <S.HashTag>#INOVAÇÃO</S.HashTag>
                    <S.Title>Quais as vantagens<br /> de usar <S.RedSpan>TeslaBank</S.RedSpan>?</S.Title>
                </S.ContainerTitle>
                <S.DivAllAdvantage>
                    <S.EachAdvantage>
                        <img src={card} alt="" />
                        <S.H3Advantage>Cartão TeslaBank</S.H3Advantage>
                        <S.PAdvantage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.</S.PAdvantage>
                        <S.AnchorAdvantage href="/">VEJA AS OPÇÕES</S.AnchorAdvantage>
                    </S.EachAdvantage>
                    <S.EachAdvantage>
                        <img src={cart} alt="" />
                        <S.H3Advantage>Investimentos</S.H3Advantage>
                        <S.PAdvantage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.</S.PAdvantage>
                        <S.AnchorAdvantage href="/">LER MAIS</S.AnchorAdvantage>
                    </S.EachAdvantage>
                    <S.EachAdvantage>
                        <img src={clock} alt="" />
                        <S.H3Advantage>Atendimento 24h</S.H3Advantage>
                        <S.PAdvantage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.</S.PAdvantage>
                        <S.AnchorAdvantage href="/">VEJA AS OPÇÕES</S.AnchorAdvantage>
                    </S.EachAdvantage>
                    <S.EachAdvantage>
                        <img src={shield} alt="" />
                        <S.H3Advantage>Segurança</S.H3Advantage>
                        <S.PAdvantage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.</S.PAdvantage>
                        <S.AnchorAdvantage href="/">LER MAIS</S.AnchorAdvantage>
                    </S.EachAdvantage>
                    <S.EachAdvantage>
                        <img src={percent} alt="" />
                        <S.H3Advantage>Sem taxas</S.H3Advantage>
                        <S.PAdvantage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.</S.PAdvantage>
                        <S.AnchorAdvantage href="/">COMO FUNCIONA</S.AnchorAdvantage>
                    </S.EachAdvantage>
                    <S.EachAdvantage>
                        <img src={gift} alt="" />
                        <S.H3Advantage>Receba prêmios</S.H3Advantage>
                        <S.PAdvantage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo lacinia, tempus odio hendrerit, ultricies diam.</S.PAdvantage>
                        <S.AnchorAdvantage href="/">VEJA COMO</S.AnchorAdvantage>
                    </S.EachAdvantage>
                </S.DivAllAdvantage>
            </S.ContainerAdvantages>
        </>
    )
}

export default Advantages;