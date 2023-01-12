import * as S from "../../styles/FooterStyled"
import logo from "../../assets/pwrdby.png"

const Footer = () => {
    return (
        <>
            <S.ContainerFooter>
                <S.LawP>Copyright ©2022 Todos os direitos reservados.</S.LawP>
                <S.ContainerLogo>
                    <S.LogoP>Powered by</S.LogoP>
                    <img src={logo} alt="logo iuricode"/>
                </S.ContainerLogo>
            </S.ContainerFooter>
        </>
    )
}

export default Footer;