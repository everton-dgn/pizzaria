import { TitleSection, Steps, Cart, Additional, BtnNext } from 'components'
import axios from 'axios'

export const Etapa3 = ({ dataApi }: any) => {
  return (
    <>
      <Steps activeStep={[true, true, true, false, false]} />
      <TitleSection title="Selecione adicionais para a pizza" />
      <Cart />
      <div>
        <div>
          <Additional data={dataApi.additionals} />
        </div>
      </div>
      <BtnNext route={'/etapa-4'} />
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get(
    'https://pizzaria-toffanetto.vercel.app/api/additionals'
  )
  const dataApi = res.data[0]
  return {
    props: {
      dataApi
    }
  }
}
