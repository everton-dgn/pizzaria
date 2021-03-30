import React, { useState, createContext } from 'react'

interface ChallengeContextData {
  pizza1: any
  setPizza1: any
  pizza2: any
  setPizza2: any
  pizza3: any
  setPizza3: any
  pizza4: any
  setPizza4: any
  cart: any
  setCart: any
  size: any
  setSize: any
  adBacon: any
  setAdBacon: any
  adCalabreza: any
  setAdCalabreza: any
  adMussarela: any
  setAdMussarela: any
  adPalmito: any
  setAdPalmito: any
  formData: any
  setFormData: any
}

export const DataContext = createContext({} as ChallengeContextData)

export const DataStorage = ({ children }: any) => {
  const [pizza1, setPizza1] = useState('')
  const [pizza2, setPizza2] = useState('')
  const [pizza3, setPizza3] = useState('')
  const [pizza4, setPizza4] = useState('')

  const [cart, setCart] = useState(false)
  const [size, setSize] = useState([])

  const [adBacon, setAdBacon] = useState(0)
  const [adCalabreza, setAdCalabreza] = useState(0)
  const [adMussarela, setAdMussarela] = useState(0)
  const [adPalmito, setAdPalmito] = useState(0)

  const [formData, setFormData] = useState('')

  return (
    <DataContext.Provider
      value={{
        pizza1,
        setPizza1,
        pizza2,
        setPizza2,
        pizza3,
        setPizza3,
        pizza4,
        setPizza4,

        cart,
        setCart,
        size,
        setSize,

        adBacon,
        setAdBacon,
        adCalabreza,
        setAdCalabreza,
        adMussarela,
        setAdMussarela,
        adPalmito,
        setAdPalmito,

        formData,
        setFormData
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
