import { useContext } from 'react'
import * as S from 'components/Cart/styles'
import { DataContext } from 'hooks/UseContext'

export const Cart = () => {
  const { cart } = useContext(DataContext)

  return (
    <>
      <div>
        <S.ContainerCart>
          <S.Cart>
            Valor Total: <b>R$ {cart || '0.00'}</b>
          </S.Cart>
        </S.ContainerCart>
      </div>
    </>
  )
}
