import { useContext, useState } from 'react'
import * as S from 'components/Size/styles'
import { DataContext } from 'hooks/UseContext'

export const Size = ({ data }: any) => {
  const { setSize, setCart } = useContext(DataContext)
  const [selectedValue, setSelectedValue] = useState('a')

  const addCart = (price: any, size: any) => {
    setSize([price, size])
    setCart(price)
  }

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value)
  }

  return (
    <>
      <S.TitleComponent>Tamanhos</S.TitleComponent>
      <S.ContainerSize>
        {data[0].sizeAndPrice.map((el: any) => (
          <S.Card key={el.size}>
            <S.ContainerRadio>
              <S.RadioContent>
                <S.RadioLabel>
                  <input
                    type="radio"
                    onClick={() => addCart(el.price, el.size)}
                    checked={selectedValue === el.size}
                    onChange={handleChange}
                    value={el.size}
                    name={el.size}
                    // inputProps={{ 'aria-label': el.size }}
                  />
                </S.RadioLabel>
                <S.ContainerInfo>
                  <S.Title>Pizza {el.size}</S.Title>
                  <S.ContentInfo>
                    <S.SubTitle>({el.slices} Fatias)</S.SubTitle>
                  </S.ContentInfo>
                  <S.Title>R$ {el.price}</S.Title>
                </S.ContainerInfo>
              </S.RadioContent>
            </S.ContainerRadio>
          </S.Card>
        ))}
      </S.ContainerSize>
    </>
  )
}
