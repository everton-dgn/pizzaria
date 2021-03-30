import { useContext } from 'react'
import { TitleSection, Steps, Cart } from 'components'
import * as S from 'styles/pages/success'
// import Router from 'next/router'
import { DataContext } from 'hooks/UseContext'

export const Sucesso = () => {
  const {
    pizza1,
    pizza2,
    pizza3,
    pizza4,
    adBacon,
    adCalabreza,
    adMussarela
    // adPalmito,
    // formNome,
    // formEmail,
    // formCelular,
    // formCep,
    // formRua,
    // formNumero,
    // formBairro,
    // formCidade,
    // formEstado,
    // cart
  } = useContext(DataContext)

  const sendZap = async () => {
    /* await Router.push(
      `https://api.whatsapp.com/send?phone=55${formCelular}&text=%0a*DADOS%20DO%20PEDIDO*%0a%0a*Nome%20Completo:*%0a${formNome}%0a%0a*E-mail:*%0a${formEmail}%0a%0a*Celular:*%0a${formCelular}%0a%0a*Endereço:*%0a${formRua},%20${formNumero}%20-%20${formBairro}.%0a${formCidade},%20${formEstado}.%20${formCep}.%0a%0a*Sabor(es):*%0a${
        pizza1.checked === true ? '• ' + pizza1.name : ''
      }%0a${pizza2.checked === true ? '• ' + pizza2.name : ''}%0a${
        pizza3.checked === true ? '• ' + pizza3.name : ''
      }%0a${
        pizza4.checked === true ? '• ' + pizza4.name : ''
      }%0a%0a*Tamanho*%0a${
        pizza1.checked === true ? '• ' + pizza1.size : ''
      }%0a${pizza2.checked === true ? '• ' + pizza2.size : ''}%0a${
        pizza3.checked === true ? '• ' + pizza3.size : ''
      }%0a${
        pizza4.checked === true ? '• ' + pizza4.size : ''
      }%0a%0a*Adiconais:*%0a${adBacon ? '• ' + adBacon + ' x Bacon' : ''}%0a${
        adCalabreza ? '• ' + adCalabreza + ' x Calabreza' : ''
      }%0a${adMussarela ? '• ' + adMussarela + ' x Mussarela' : ''}%0a${
        adPalmito ? '• ' + adPalmito + ' x Palmito' : ''
      }%0a%0a*TOTAL:*%0aR$%20${cart}%0a`
    )
     */
  }

  return (
    <>
      <Steps activeStep={[true, true, true, true, true]} />
      <TitleSection title="Confirmar Envio do pedido" />
      <Cart />
      <div>
        <div>
          <S.TitleComponent>Resumo do Pedido</S.TitleComponent>
          <S.ContainerSuccess>
            <S.Card>
              <S.CardContent>
                <S.ContainerList>
                  <S.Title>Sabor(es):</S.Title>
                  <ul>
                    <li>{pizza1.checked === true && '• ' + pizza1.name}</li>
                    <li>{pizza2.checked === true && '• ' + pizza2.name}</li>
                    <li>{pizza3.checked === true && '• ' + pizza3.name}</li>
                    <li>{pizza4.checked === true && '• ' + pizza4.name}</li>
                  </ul>
                  <br />
                  <S.Title>Tamanho:</S.Title>
                  <li>{pizza1.checked === true && '• ' + pizza1.size}</li>
                  <li>{pizza2.checked === true && '• ' + pizza2.size}</li>
                  <li>{pizza3.checked === true && '• ' + pizza3.size}</li>
                  <li>{pizza4.checked === true && '• ' + pizza4.size}</li>
                  <br />
                  <S.Title>Adiconais:</S.Title>
                  <ul>
                    <li>{adBacon && '• ' + adBacon + ' x Bacon'}</li>
                    <li>
                      {adCalabreza && '• ' + adCalabreza + ' x Calabreza'}
                    </li>
                    <li>
                      {adMussarela && '• ' + adMussarela + ' x Mussarela'}
                    </li>
                    {/* <li>{adPalmito && '• ' + adPalmito + ' x Palmito'}</li> */}
                  </ul>
                </S.ContainerList>
                <S.ContainerList>
                  <S.Title>Nome Completo:</S.Title>
                  {/* <p>{formNome}</p>
                  <br />
                  <S.Title>E-mail:</S.Title>
                  <p>{formEmail}</p>
                  <br />
                  <S.Title>Celular:</S.Title>
                  <p>{formCelular}</p>
                </S.ContainerList>
                <S.ContainerList>
                  <S.Title>Endereço</S.Title>
                  <p>
                    {formRua}, {formNumero} - {formBairro}.
                  </p>
                  <p>
                    {formCidade}, {formEstado}. {formCep}
                  </p> */}
                </S.ContainerList>
                <S.ContainerList>
                  <S.Title>Recomendação do dia?</S.Title>
                  {pizza1.checked === pizza1.recommended && <p>Não</p>}
                  {pizza1.checked !== pizza1.recommended && (
                    <p>
                      • Sim. Você acumulou
                      <b className="text-green-400 mx-2">+{pizza1.point}</b>
                      pontos para a próxima compra!
                    </p>
                  )}
                </S.ContainerList>
              </S.CardContent>

              <S.BtnSend onClick={sendZap}>
                Enviar pedido pelo WhatsApp <S.Zap />
              </S.BtnSend>
            </S.Card>
          </S.ContainerSuccess>
        </div>
      </div>
    </>
  )
}
