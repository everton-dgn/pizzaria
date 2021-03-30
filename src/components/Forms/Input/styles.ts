import styled from 'styled-components'
import { s } from 'theme'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

export const WrapperInput = styled.div<{ error: any }>`
  display: flex;
  flex-direction: column;

  label {
    color: ${props => (props.error?.length > 0 ? s.errorColor : '#a0a6c6')};
    position: absolute;
    font-size: 15px;
    margin: 14px 14px 13px 15px;
    border-radius: 4px;
    background-color: ${s.bgDefault};
    cursor: unset;
    z-index: 0;
    transition: all 0.2s linear;
  }

  input {
    border-radius: 10px;
    box-shadow: inset -3px -3px 9px 0 #fff, inset 3px 3px 9px 0 #e0e0ef;
    border: 1.5px solid
      ${props => (props.error?.length > 0 ? s.errorColor : 'transparent')};
    outline: none;
    padding: 13px 14px;
    background-color: ${s.bgDefault};
    font-size: 15px;
    z-index: 1;
    color: ${props => (props.error?.length > 0 ? s.errorColor : s.textLabel)};
    transition: all 0.2s ease-in-out;

    &::placeholder {
      font-size: 15px;
      color: ${props => (props.error?.length > 0 ? s.errorColor : '#a0a6c6')};
    }

    &:hover {
      border: 1.5px solid
        ${props => (props.error?.length > 0 ? s.errorColor : s.borderlight)};
    }

    &:focus {
      border: 1.5px solid
        ${props => (props.error?.length > 0 ? s.errorColor : s.borderSecondary)};
    }

    &:required:invalid + label:before {
      content: '*';
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      font-size: 11.5px;
      color: ${props => (props.error?.length > 0 ? s.errorColor : s.textLabel)};
      margin-top: -18px;
      margin-left: 0;
      cursor: default;
      z-index: 2;
    }

    &:-webkit-autofill:focus + label,
    &:-webkit-autofill:not(:placeholder-shown) + label {
      font-size: 11.5px;
      color: ${props => (props.error?.length > 0 ? s.errorColor : s.textLabel)};
      margin-top: -18px;
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
  font-size: 11.5px;
  height: 13px;
  visibility: ${props => (props.error?.length > 0 ? 'visible' : 'hidden')};
`
