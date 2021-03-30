import styled from 'styled-components'
import { s } from 'theme'

export const TitleComponent = styled.h1`
  color: #7f1d1d;
  font-weight: 900;
  font-size: 22px;
  margin-bottom: 30px;
  width: fit-content;

  &:after {
    content: '';
    display: block;
    height: 5px;
    width: 30%;
    background-color: #34d399;
    margin-top: 5px;
    border-radius: 10px;
  }
`

export const ContainerSize = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  box-shadow: -6px -6px 16px 0 #fff, 6px 6px 16px 0 #e0e0ef;
  width: 100%;

  ${s.break(460)} {
    width: calc(50% - 10px);
  }

  ${s.break(870)} {
    width: calc(25% - 20px);
  }

  ${s.break(1280)} {
    width: calc(25% - 30px);
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Title = styled.h3`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: #7f1d1d;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 0;
  justify-content: center;
  text-align: center;
`

export const SubTitle = styled.h4`
  color: #34d399;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: -5px;
  margin-top: 10px;
`

export const ContainerRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`

export const RadioContent = styled.label`
  display: flex;
  flex-direction: column;
  border: 2px solid #34d399;
  border-radius: 10px;
  padding: 15px 20px;
  width: 100%;

  .MuiIconButton-root {
    color: #7f1d1d;
  }
`

export const RadioLabel = styled.div`
  margin: -5px auto -15px auto;
`
