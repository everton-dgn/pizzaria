import React, { useContext } from 'react'
import * as S from 'components/Flavor/styles'
import { DataContext } from 'hooks/UseContext'

interface FlavorProps {
  data: [
    {
      id: string
      img: string
      ingredients: string
      name: string
      points: string
      recommendation: string
      sizeAndPrice: [{ size: string; price: string; slices: string }]
    }
  ]
}

interface RecommendedCheckParams {
  e: any
  recommendation: string
  id: string
  points: string
  name: string
  size: string
}

export const Flavor = ({ data }: FlavorProps) => {
  const { setPizza1, setPizza2, setPizza3, setPizza4 } = useContext(DataContext)

  const recommendedCheck = ({
    e,
    recommendation,
    id,
    points,
    name,
    size
  }: RecommendedCheckParams) => {
    switch (id) {
      case 'pizza1':
        setPizza1({
          checked: e.target.checked,
          recommended: recommendation,
          point: points,
          name: name,
          size: size
        })
        break
      case 'pizza2':
        setPizza2({
          checked: e.target.checked,
          recommended: recommendation,
          point: points,
          name: name,
          size: size
        })
        break
      case 'pizza3':
        setPizza3({
          checked: e.target.checked,
          recommended: recommendation,
          point: points,
          name: name,
          size: size
        })
        break
      case 'pizza4':
        setPizza4({
          checked: e.target.checked,
          recommended: recommendation,
          point: points,
          name: name,
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
        {data.map((el, i) => (
          <S.Card key={el.id}>
            <S.ContainerCheckbox>
              <input
                type="checkbox"
                onClick={e =>
                  recommendedCheck({
                    e: e,
                    recommendation: el.recommendation,
                    id: el.id,
                    points: el.points,
                    name: el.name,
                    size: el.sizeAndPrice[i].size
                  })
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
