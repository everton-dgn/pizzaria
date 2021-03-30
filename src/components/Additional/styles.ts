import styled from 'styled-components'
import { s } from 'theme'

export const TitleComponent = styled.h1`
  color: #7f1d1d;
  font-weight: 900;
  font-size: 22px;
  margin-bottom: 20px;
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

export const ContainerMain = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  flex-wrap: wrap;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: -6px -6px 16px 0 #fff, 6px 6px 16px 0 #e0e0ef;
  width: 100%;

  ${s.break(552)} {
    width: calc(50% - 10px);
  }

  ${s.break(1082)} {
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
  text-align: center;
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: #7f1d1d;
  font-size: 20px;
  text-transform: uppercase;
  margin: 7px 0;
  justify-content: center;
`

export const SubTitle = styled.h4`
  color: #34d399;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 9px;
  margin-top: 0;
`

export const ContainerAdditional = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Box = styled.div`
  display: flex;
  border: 2px solid #34d399;
  border-radius: 10px;
  padding: 15px;
  flex-direction: column;
  width: 100%;
`

export const BoxImg = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  height: 180px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const AddItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 12px;

  .number {
    max-width: 60px;
    border-radius: 5px;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin: 0 10px;
    color: #39393b;
  }
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
  width: 100%;
  min-width: 60px;
  -moz-appearance: textfield;
  appearance: none;
  -webkit-appearance: textfield;
`

export const BtnCount = styled.button`
  display: block;
  align-items: center;
  justify-content: center;
  background-color: #34d399;
  font-weight: bold;
  font-size: 20px;
  padding: 0;
  border-radius: 6px;
  min-width: 40px;

  &:hover {
    background-color: #3ceaab;
  }
`
