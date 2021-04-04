import React from 'react'
import * as S from 'components/BtnNext/styles'
import Link from 'next/link'

interface Props {
  route: any
  text?: string
}

export const BtnNext = ({ route, text }: Props) => {
  return (
    <>
      <S.ContainerBtn center={text}>
        <Link href={route}>
          <a>
            <S.BtnNext>{text || 'Avançar'}</S.BtnNext>
          </a>
        </Link>
      </S.ContainerBtn>
    </>
  )
}
