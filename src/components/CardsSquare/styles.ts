import styled, { css } from 'styled-components'
import { s } from 'theme'

export const ContainerCards = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 35px;
  padding-left: 0;
  padding-right: 0;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 25px;
  box-shadow: -6px -6px 16px 0 ${s.boxShadowLight},
    6px 6px 16px 0 ${s.boxShadowDark};
  width: 100%;

  ${s.break(650)} {
    flex-direction: column;
    width: calc(50% - 13px);
    margin-bottom: 25px;
  }

  ${s.break(1135)} {
    flex-direction: row;
    width: calc(50% - 20px);
    margin-bottom: 35px;
  }
`

export const ContainerImg = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 250px;
  max-height: 250px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  ${s.break(1135)} {
    min-width: 250px;
  }

  ${s.break(1280)} {
    min-width: 300px;
  }
`

export const ContainerInfo = styled.div<{ bonus: any }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  height: 100%;

  ${props =>
    props.bonus === 'true' &&
    css`
      border: 2px solid ${s.primary};
      border-radius: 8px;
      padding: 1px 5px 5px 5px;
    `};

  em {
    margin-top: 5px;
    display: none;
    font-size: 14px;
    ${props =>
      props.bonus === 'true' &&
      css`
        display: flex;
        color: ${s.primary};
        font-weight: 500;
      `};
  }

  ${s.break(1135)} {
    margin-left: 20px;
    margin-top: 0;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  font-weight: bold;
  color: ${s.primary};
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  width: fit-content;

  &:after {
    content: '';
    display: block;
    height: 5px;
    width: 30%;
    background-color: ${s.secondary};
    margin-top: 6px;
    border-radius: 10px;
  }
`

export const SubTitle = styled.h4`
  color: ${s.secondary};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const Text = styled.p`
  font-size: 16px;
  margin-top: 0;
`

export const ButtonCard = styled.button`
  background-color: ${s.secondary};
  width: 100%;
  padding: 9px 12px;
  font-weight: bold;
  border-radius: 10px;
  font-size: 16px;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${s.secondaryHover};
  }
`
