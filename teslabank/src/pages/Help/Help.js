import * as S from "../../styles/HelpStyled"
import phone from "../../assets/icon-phone.png"
import arrow from "../../assets/arrow-down.png"

const Help = () => {
    return (
        <>
            <S.ContainerHelp>
                <S.HashTag>#AJUDA</S.HashTag>
                <S.H2Help>Ficou alguma dúvida?</S.H2Help>
                <div>
                    <S.EachHelp>
                        <img src={phone} alt="icone de celular"/>
                        <div>
                            <S.H3Help>Lorem ipsum dolor sit amet</S.H3Help>
                            <S.PEachHelp>Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.</S.PEachHelp>
                        </div>
                        <img src={arrow} alt="icone de seta"/>
                    </S.EachHelp>
                    <S.EachHelp>
                        <img src={phone} alt="icone de celular"/>
                        <div>
                            <S.H3Help>Lorem ipsum dolor sit amet</S.H3Help>
                            <S.PEachHelp>Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.</S.PEachHelp>
                        </div>
                        <img src={arrow} alt="icone de seta"/>
                    </S.EachHelp>
                    <S.EachHelp>
                        <img src={phone} alt="icone de celular"/>
                        <div>
                            <S.H3Help>Lorem ipsum dolor sit amet</S.H3Help>
                            <S.PEachHelp>Vestibulum faucibus risus eu mi volutpat, vel tristique dui rutrum.</S.PEachHelp>
                        </div>
                        <img src={arrow} alt="icone de seta"/>
                    </S.EachHelp>
                </div>
                
            </S.ContainerHelp>
        </>
    )
}

export default Help;