import React, { useContext } from 'react'
import * as S from 'components/Flavor/styles'
import { DataContext } from 'hooks/UseContext'

export const Flavor = ({ data }: any) => {
  const { setPizza1, setPizza2, setPizza3, setPizza4 } = useContext(DataContext)

  const recommendedCheck = (
    e: any,
    param: any,
    id: any,
    pts: any,
    nome: any,
    size: any
  ) => {
    switch (id) {
      case 'pizza1':
        setPizza1({
          checked: e.target.checked,
          recommended: param,
          point: pts,
          name: nome,
          size: size
        })
        break
      case 'pizza2':
        setPizza2({
          checked: e.target.checked,
          recommended: param,
          point: pts,
          name: nome,
          size: size
        })
        break
      case 'pizza3':
        setPizza3({
          checked: e.target.checked,
          recommended: param,
          point: pts,
          name: nome,
          size: size
        })
        break
      case 'pizza4':
        setPizza4({
          checked: e.target.checked,
          recommended: param,
          point: pts,
          name: nome,
          size: size
        })
        break
      default:
    }
  }

  return (
    <>
      <S.TitleComponent>Sabores</S.TitleComponent>
      <S.ContainerCard>
        {data.map((el: any, i: any) => (
          <S.Card key={el.id}>
            <S.ContainerCheckbox>
              <input
                type="checkbox"
                onClick={(e: any) =>
                  recommendedCheck(
                    e,
                    el.recommendation,
                    el.id,
                    el.points,
                    el.name,
                    el.sizeAndPrice[i].size
                  )
                }
              />
            </S.ContainerCheckbox>
            <S.ContainerImg>
              <img
                src={`/api-img/pizzas/${el.img}.jpg`}
                alt="Imagem de pizza"
              />
            </S.ContainerImg>
            <S.ContainerInfo bonus={el.recommendation}>
              <S.Title>
                <b>PIZZA {el.name}</b> <em>(*Recomendação do dia)</em>
              </S.Title>
              <S.ContentInfo>
                <S.SubTitle>Ingredientes:</S.SubTitle>
                <S.Text>{el.ingredients}</S.Text>
              </S.ContentInfo>
            </S.ContainerInfo>
          </S.Card>
        ))}
      </S.ContainerCard>
    </>
  )
}
