import { useEffect, useRef } from 'react'
import * as S from 'components/Forms/Input/styles'
import { useField } from '@unform/core'

export const Input = ({ name, id, placeholder, ...rest }: any) => {
  const inputRef = useRef(null)

  const { fieldName, registerField, error, clearError } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  const clearField = () => {
    // @ts-ignore
    if (error?.length > 0) clearError()
  }

  return (
    <>
      <S.ContainerInput>
        <S.WrapperInput error={error}>
          <input
            name={name}
            id={id}
            placeholder={placeholder}
            {...rest}
            ref={inputRef}
            onInput={clearField}
          />
          <label htmlFor={id}>{placeholder}</label>
        </S.WrapperInput>
        <S.MsgError error={error}>{error && error}</S.MsgError>
      </S.ContainerInput>
    </>
  )
}
