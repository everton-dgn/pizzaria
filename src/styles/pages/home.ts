import styled from 'styled-components'
import { s } from 'theme'

export const ContainImg = styled.div`
  height: 15vw;
  min-height: 100px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  ${s.break(1024)} {
    height: 15rem;
  }
`

export const Paragraph = styled.p`
  font-size: 20px;
  width: 100%;
  margin: 0 auto 20px auto;
  padding-bottom: 10px;
  text-align: center;
  max-width: 800px;
`
