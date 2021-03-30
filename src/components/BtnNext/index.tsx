import React from 'react'
import * as S from 'components/BtnNext/styles'
import Link from 'next/link'

export const BtnNext = ({ route }: any) => {
  return (
    <>
      <S.ContainerBtn>
        <Link href={route}>
          <a>
            <S.BtnNext>Avançar</S.BtnNext>
          </a>
        </Link>
      </S.ContainerBtn>
    </>
  )
}
