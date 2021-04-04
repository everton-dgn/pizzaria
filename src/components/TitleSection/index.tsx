import * as S from 'components/TitleSection/styles'
import { c } from 'theme'

export const TitleSection = ({ title }: any) => {
  return (
    <>
      <c.Container>
        <S.TitleSection>{title}</S.TitleSection>
      </c.Container>
    </>
  )
}
