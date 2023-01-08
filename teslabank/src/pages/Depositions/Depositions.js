import * as S from "../../styles/DepositionsStyled"

const Depositions = () => {
    return (
        <>
            <S.ContainerDepositions>
                <S.ContainerTitle>
                    <S.HashTag>#DEPOIMENTOS</S.HashTag>
                    <S.H2Depositions><b>TeslaBank fora das telinhas:</b> Veja o que falam sobre nosso serviço</S.H2Depositions>
                </S.ContainerTitle>
                <S.DivComments>
                    <S.EachComment>
                        <S.H3Comments>NIKOLA TESLA</S.H3Comments>
                        <S.PComments>“Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Vestibulum scelerisque nisl quis viverra<br/> tincidunt. ”</S.PComments>
                    </S.EachComment>
                    <S.EachComment>
                        <S.H3Comments>STEVE JOBS</S.H3Comments>
                        <S.PComments>“Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Vestibulum scelerisque nisl quis viverra<br/> tincidunt. ”</S.PComments>
                    </S.EachComment>
                    <S.EachComment>
                        <S.H3Comments>ALAN TURING</S.H3Comments>
                        <S.PComments>“Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Vestibulum scelerisque nisl quis viverra<br/> tincidunt. ”</S.PComments>
                    </S.EachComment>
                </S.DivComments>
            </S.ContainerDepositions>
        </>
    )
}

export default Depositions;
