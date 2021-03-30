import styled from 'styled-components'
import { s } from 'theme'
import { Form } from '@unform/web'

export const TitleComponent = styled.h1`
  color: #7f1d1d;
  font-weight: bold;
  font-size: 20px;
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

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px 20px;
  border-radius: 10px;
  margin-bottom: 50px;
  width: 100%;
  box-shadow: -6px -6px 16px 0 #fff, 6px 6px 16px 0 #e0e0ef;
`

export const FormFields = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContentForm = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: dense;
  column-gap: 20px;
  width: 100%;

  div {
    grid-column: span 12;
  }

  p {
    margin-top: 0;
  }

  ${s.break(600)} {
    div {
      grid-column: span 6;
    }
  }

  ${s.break(1000)} {
    div {
      grid-column: span 4;
    }
  }
`

export const BtnSend = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  background-color: #34d399;
  width: fit-content;
  padding: 10px 70px;
  margin: 16px auto 0 auto;
  font-weight: bold;
  border-radius: 10px;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #38e3a5;
  }
`
