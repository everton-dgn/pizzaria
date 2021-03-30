import styled from 'styled-components'

export const ContainerBtn = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;

  a {
    margin-left: auto;
  }
`

export const BtnNext = styled.button`
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #34d399;
  width: fit-content;
  padding: 10px 50px;
  border-radius: 8px;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #39ecab;
  }
`
