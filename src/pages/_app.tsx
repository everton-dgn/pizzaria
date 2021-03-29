// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import GlobalStyles from 'styles/GlobalStyles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default App
