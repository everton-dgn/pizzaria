import * as S from 'styles/pages/home'
import { TitleSection, CardsSquare } from 'components'
import axios from 'axios'

const Home = ({ dataApi }: any) => {
  return (
    <>
      <S.ContainImg>
        <img
          src="/img/headers/background-header.jpg"
          alt="Imagem de uma pizza"
        />
      </S.ContainImg>
      <div>
        <div>
          <TitleSection title="Peça a sua pizza online agora!" />
          <S.Paragraph>
            Aproveite a nossa promoção! Comprando a nossa recomendação de pizza
            do dia você acumula pontos para a próxima compra. Quantos mais
            pontos você acumular, maior será o desconto na próxima compra.
          </S.Paragraph>
          <CardsSquare data={dataApi.pizzas} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get('http://localhost:3000/api/pizzas')
  const dataApi = res.data[0]
  return {
    props: {
      dataApi
    }
  }
}

export default Home
