import styled, { css } from 'styled-components'
import { s } from 'theme'

export const TitleComponent = styled.h1`
  color: #7f1d1d;
  font-weight: 900;
  font-size: 22px;
  margin-bottom: 16px;
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

export const ContainerCard = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: -6px -6px 16px 0 #fff, 6px 6px 16px 0 #e0e0ef;
  width: 100%;

  ${s.break(540)} {
    padding: 16px 20px;
  }

  ${s.break(700)} {
    width: calc(50% - 10px);
  }

  ${s.break(1280)} {
    width: calc(50% - 20px);
    margin-bottom: 30px;
  }
`

export const ContainerImg = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 90px;
  min-width: 90px;
  height: 90px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const ContainerInfo = styled.div<{ bonus: any }>`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  width: 100%;
  justify-content: start;

  ${props =>
    props.bonus === 'true' &&
    css`
      border: 2px solid #7f1d1d;
      border-radius: 8px;
      padding: 1px 5px 5px 5px;
    `};

  em {
    display: none;
    color: #7f1d1d;
    font-weight: 500;
    font-size: 10px;
    ${props =>
      props.bonus === 'true' &&
      css`
        display: flex;
      `};
  }

  ${s.break(540)} {
    font-size: 12px;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-weight: bold;
  color: #7f1d1d;
  font-size: 15px;
  text-transform: uppercase;
  margin: 0;
  align-items: baseline;

  b {
    margin-right: 7px;
  }

  ${s.break(540)} {
    font-size: 18px;
  }
`

export const SubTitle = styled.h4`
  color: #34d399;
  font-size: 12px;
  font-weight: 700;
  margin: 0;

  ${s.break(540)} {
    font-size: 14px;
  }
`

export const Text = styled.p`
  font-size: 13px;
  margin: 0;
  line-height: 1.2;

  ${s.break(540)} {
    font-size: 15px;
    line-height: 1.5;
  }
`

export const ContainerCheckbox = styled.div`
  display: flex;
  height: fit-content;
  margin: auto 5px auto -10px;

  .MuiIconButton-root {
    color: #7f1d1d;
  }
`
