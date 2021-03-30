import { useContext } from 'react'
import { TitleSection, Steps, Cart, Size, BtnNext } from 'components'
import axios from 'axios'
import { DataContext } from 'hooks/UseContext'

export const Etapa2 = ({ dataApi }: any) => {
  const { cart } = useContext(DataContext)

  return (
    <>
      <Steps activeStep={[true, true, false, false, false]} />
      <TitleSection title="Selecione o tamanho da pizza" />
      <Cart />
      <div>
        <div>
          <Size data={dataApi.pizzas} />
        </div>
      </div>
      <BtnNext route={cart !== undefined ? '/etapa-3' : ''} />
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
