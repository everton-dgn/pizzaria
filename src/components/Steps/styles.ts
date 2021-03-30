import styled from 'styled-components'
import { DoneRounded as DoneRoundedIcon } from '@material-ui/icons'

export const Checked = styled(DoneRoundedIcon)`
  color: #374151;
  width: 27px;
  height: 27px;
`

export const ContainerSteps = styled.div`
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`

export const ContainerLine = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 11px;
  justify-content: center;
  margin-top: 21px;
  margin-bottom: -21px;
`

export const LineStep = styled.div<{ actived: any }>`
  flex: 1;
  height: 4px;
  background-color: ${props => (props.actived ? '#7f1d1d' : '#e6e4f1')};
`

export const ContainerRounded = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
`

export const Step = styled.div<{ actived: any }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 900;
  z-index: 10;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${props => (props.actived ? '#34d399' : '#e6e4f1')};
`
