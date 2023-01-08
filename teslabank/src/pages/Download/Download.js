import dwldApple from "../../assets/dwld-apple.png";
import dwldGoogle from "../../assets/dwld-google.png";
import logoTesla from "../../assets/logo-tesla.png";
import * as S from "../../styles/DownloadStyled"

const Download = () => {
    return (
        <S.ContainerDownload>
            <S.DivInfos>
                <S.H2Download>Uma nova experiência<br/> em <S.RedSpan>serviços financeiros</S.RedSpan>.<br/>  Somos digital, somos TeslaBank. </S.H2Download>
                <S.PDownload>Donec venenatis at turpis at ornare. Pellentesque a quam<br/> vel dui lacinia dapibus in sit amet dolor.</S.PDownload>
                <S.DivBtnDownload>
                    <S.ImgBtn src={dwldApple} alt="icone download apple"/>
                    <S.ImgBtn src={dwldGoogle} alt="icone download playstore"/>
                </S.DivBtnDownload>
            </S.DivInfos>
            <S.ImgTesla src={logoTesla} alt="icone da tesla"/>
        </S.ContainerDownload>
    )
}

export default Download;