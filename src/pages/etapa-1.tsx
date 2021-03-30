import axios from 'axios'
import { TitleSection, Steps, Cart, Flavor, BtnNext } from 'components'

export const Etapa1 = ({ dataApi }: any) => {
  return (
    <>
      <Steps activeStep={[true, false, false, false, false]} />
      <TitleSection title="Selecione o sabor da pizza" />
      <Cart />
      <div>
        <div>
          <Flavor data={dataApi.pizzas} />
        </div>
      </div>
      <BtnNext route={'/etapa-2'} />
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get(
    'https://pizzaria-toffanetto.vercel.app/api/pizzas'
  )
  const dataApi = res.data[0]
  return {
    props: {
      dataApi
    }
  }
}
