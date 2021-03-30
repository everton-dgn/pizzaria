import { TitleSection, Steps, Cart, FormData } from 'components'

export const Etapa4 = () => {
  return (
    <>
      <Steps activeStep={[true, true, true, true, false]} />
      <TitleSection title="Preencha com seus dados" />
      <Cart />
      <div>
        <div>
          <FormData />
        </div>
      </div>
    </>
  )
}
