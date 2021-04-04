import { useContext } from 'react'
import { TitleSection, Steps, Cart, Size, BtnNext } from 'components'
import axios from 'axios'
import { DataContext } from 'hooks/UseContext'
import { c } from 'theme'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

const Etapa2 = ({
  dataApi
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { cart } = useContext(DataContext)

  return (
    <>
      <Steps activeStep={[true, true, false, false, false]} />
      <TitleSection title="Selecione o tamanho da pizza" />
      <Cart />
      <c.Container>
        <Size data={dataApi.pizzas} />
        <BtnNext route={cart !== undefined ? '/etapa-3' : ''} />
      </c.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const res = await axios.get('http://localhost:3000/api/pizzas')
  const dataApi = res.data[0]

  return {
    props: {
      dataApi
    }
  }
}

export default Etapa2
