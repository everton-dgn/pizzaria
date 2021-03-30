import styled from 'styled-components'
import { WhatsApp as WhatsAppIcon } from '@material-ui/icons'

export const Zap = styled(WhatsAppIcon)`
  color: #374151;
  width: 30px;
  height: 30px;
  margin-bottom: 3px;
  margin-left: 5px;
`

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

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
  width: 100%;
  box-shadow: -6px -6px 16px 0 #fff, 6px 6px 16px 0 #e0e0ef;
`

export const CardContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns:
    calc(25% - 60px / 4) calc(25% - 60px / 4)
    calc(25% - 60px / 4) calc(25% - 60px / 4);
  grid-template-rows: auto;
  grid-gap: 20px;
`

export const ContainerSuccess = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid #34d399;
  border-radius: 10px;
  padding: 10px;
`

export const BtnSend = styled.button`
  font-size: 18px;
  text-transform: uppercase;
  background-color: #34d399;
  padding: 10px 30px;
  margin: 30px auto 0 auto;
  font-weight: bold;
  border-radius: 10px;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #3ae7a8;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  color: #7f1d1d;
  font-size: 18px;
  margin-bottom: 3px;
`
