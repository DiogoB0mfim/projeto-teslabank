import * as S from "../../styles/BenefitsStyled"
import iconOk from "../../assets/icon-ok.png"
import iconCursor from "../../assets/icon-cursor.png"
import iconFav from "../../assets/icon-fav.png"
import imgPhone from "../../assets/img-phone.png"
import iconMoney from "../../assets/icon-money.png"
import iconPhone from "../../assets/icon-phone.png"
import iconHappy from "../../assets/icon-happy.png"

const Benefits = () => {
    return (
        <>
            <S.ContainerBenefits>
                <S.DivPhone>
                    <S.ImgPhone src={imgPhone} alt="imagem do celular"/>
                    <S.ImgOk src={iconOk} alt="icone de verificado"/>
                    <S.ImgCursor src={iconCursor} alt=""/>
                    <S.ImgFav src={iconFav} alt="icone de favorito"/>
                </S.DivPhone>
                <S.DivInfos>
                    <S.H2Benefits>Abra sua conta <S.RedSpan>gratuita</S.RedSpan>!</S.H2Benefits>
                    <S.PBenefits>Envie e receba dinheiro de forma mais prática e rápida. Faça Pix, TEDs e<br/> transferências com agendamento para todos os bancos sem pagar nada.</S.PBenefits>
                    <div>
                        <S.DivBenefits>
                            <S.IconBenefit src={iconMoney} alt="icone de crifrão"/>
                            <div>
                                <S.H3Benefits>Seu dinheiro rendendo mais</S.H3Benefits>
                                <S.PEachBenefit>Rendem mais que a poupança e você resgata quando quiser</S.PEachBenefit>
                            </div>
                        </S.DivBenefits>
                        <S.DivBenefits>
                            <S.IconBenefit  src={iconPhone} alt="icone de celular"/>
                            <div>
                                <S.H3Benefits>Conta digital 100% grátis</S.H3Benefits>
                                <S.PEachBenefit>Transferências, boletos de depósito e outros serviços gratuitos</S.PEachBenefit>
                            </div>
                        </S.DivBenefits>
                        <S.DivBenefits>
                            <S.IconBenefit  src={iconHappy} alt="icone de pessoa feliz"/>
                            <div>
                                <S.H3Benefits>Cartão sem anuidade</S.H3Benefits>
                                <S.PEachBenefit>Conta digital com cartão de crédito sem anuidade e sem complicação</S.PEachBenefit>
                            </div>
                        </S.DivBenefits>
                    </div>
                </S.DivInfos>
            </S.ContainerBenefits>
        </>
    );
}

export default Benefits;