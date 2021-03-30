import * as S from 'components/Header/styles'

export const Header = () => {
  return (
    <>
      <S.ContainerFluid>
        <S.Nav>
          <S.ContainerCenter>
            <div>
              <S.Logo>
                Pizzaria <em>Toffanetto</em>
              </S.Logo>
            </div>
          </S.ContainerCenter>
        </S.Nav>
      </S.ContainerFluid>
    </>
  )
}
