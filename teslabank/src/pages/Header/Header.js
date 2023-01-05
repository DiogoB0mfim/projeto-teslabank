import logo from "../../assets/logo-tb.png"
import login from "../../assets/icon-login.png"
import arrow from "../../assets/arrow-down.png"
import * as S from "../../styles/HeaderStyled"
import { useState } from "react";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState("disabled");

    const toggleState = () => {
        if (toggleMenu === "disabled") {
            setToggleMenu("active");
        } else {
            setToggleMenu("disabled");
        }
    };

    return (
        <>
            <S.Header id="header">
                <S.Nav id="nav" className={toggleMenu}>
                    <S.HeaderWhiteHalf>
                        <img src={logo} alt="logo TeslaBank" />
                        <S.BtnMobile
                            onClick={() => toggleState()}
                            aria-label="Abrir Menu"
                            id="btn-mobile"
                            aria-haspopup="true"
                            aria-controls="menu"
                            aria-expanded="false"
                        >
                            <S.Hamburger id="hamburger"></S.Hamburger>
                        </S.BtnMobile>
                        <S.UlContainer>
                            <S.LiOptionsHover>
                                <S.DivTagAsset>
                                    <S.TagA href="#">TeslaBank</S.TagA>
                                    <S.AssetArrow src={arrow} />
                                </S.DivTagAsset>
                                <S.UlOptions>
                                    <S.EachLi><S.TagA href="#" onClick={() => toggleState("disabled")}>Newsletter</S.TagA></S.EachLi>
                                    <S.EachLi><S.TagA href="#" onClick={() => toggleState("disabled")}>Blog</S.TagA></S.EachLi>
                                </S.UlOptions>
                            </S.LiOptionsHover>
                            <S.LiOptionsHover>
                                <S.DivTagAsset>
                                    <S.TagA href="#">Conta Tb</S.TagA>
                                    <S.AssetArrow src={arrow} />
                                </S.DivTagAsset>
                                <S.UlOptions>
                                    <S.EachLi><S.TagA href="#" onClick={() => toggleState("disabled")}>Criar sua conta</S.TagA></S.EachLi>
                                    <S.EachLi><S.TagA href="#" onClick={() => toggleState("disabled")}>Rendimentos</S.TagA></S.EachLi>
                                    <S.EachLi><S.TagA href="#" onClick={() => toggleState("disabled")}>Taxas</S.TagA></S.EachLi>
                                </S.UlOptions>
                            </S.LiOptionsHover>
                            <S.LiOptionsHover>
                                <S.DivTagAsset>
                                    <S.TagA href="#">Para você</S.TagA>
                                    <S.AssetArrow src={arrow} />
                                </S.DivTagAsset>
                                <S.UlOptions>
                                    <li><S.TagA href="#" onClick={() => toggleState("disabled")}>Plano especial</S.TagA></li>
                                </S.UlOptions>
                            </S.LiOptionsHover>
                        </S.UlContainer>
                    </S.HeaderWhiteHalf>
                    <S.HeaderRedHalf>
                        <S.LoginContainer>
                            <p>Login</p>
                            <img src={login} alt="icone de usuário" />
                        </S.LoginContainer>
                    </S.HeaderRedHalf>
                </S.Nav>
            </S.Header>
        </>
    )
};

export default Header;