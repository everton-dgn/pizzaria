import styled from 'styled-components'
import { s } from 'theme'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`

export const WrapperInput = styled.div<{ error: any }>`
  display: flex;
  flex-direction: column;

  label {
    color: ${props => (props.error?.length > 0 ? s.errorColor : '#a0a6c6')};
    position: absolute;
    font-size: 1.5rem;
    margin: 1.4rem 1.4rem 1.3rem 1.5rem;
    border-radius: 0.4rem;
    background-color: ${s.bgDefault};
    cursor: unset;
    z-index: 0;
    transition: all 0.2s linear;
  }

  input {
    border-radius: 1rem;
    box-shadow: inset -0.3rem -0.3rem 0.9rem 0 #fff,
      inset 0.3rem 0.3rem 0.9rem 0 #e0e0ef;
    border: 0.15rem solid
      ${props => (props.error?.length > 0 ? s.errorColor : 'transparent')};
    outline: none;
    padding: 1.3rem 1.4rem;
    background-color: ${s.bgDefault};
    font-size: 1.5rem;
    z-index: 1;
    color: ${props => (props.error?.length > 0 ? s.errorColor : s.textLabel)};
    transition: all 0.2s ease-in-out;

    &::placeholder {
      font-size: 1.5rem;
      color: ${props => (props.error?.length > 0 ? s.errorColor : '#a0a6c6')};
    }

    &:hover {
      border: 0.15rem solid
        ${props => (props.error?.length > 0 ? s.errorColor : s.borderlight)};
    }

    &:focus {
      border: 0.15rem solid
        ${props => (props.error?.length > 0 ? s.errorColor : s.borderSecondary)};
    }

    &:required:invalid + label:before {
      content: '*';
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      font-size: 1.15rem;
      color: ${props => (props.error?.length > 0 ? s.errorColor : s.textLabel)};
      margin-top: -1.8rem;
      margin-left: 0;
      cursor: default;
      z-index: 2;
    }

    &:-webkit-autofill:focus + label,
    &:-webkit-autofill:not(:placeholder-shown) + label {
      font-size: 1.15rem;
      color: ${props => (props.error?.length > 0 ? s.errorColor : s.textLabel)};
      margin-top: -1.8rem;
      margin-left: 0;
      cursor: default;
      z-index: 2;
    }
  }
`

export const MsgError = styled.small<{ error: any }>`
  display: flex;
  color: ${s.errorColor};
  justify-content: flex-end;
  font-size: 1.15rem;
  height: 1.3rem;
  visibility: ${props => (props.error?.length > 0 ? 'visible' : 'hidden')};
`
