import 'styles/tailwind.css'
import { AppProps } from 'next/app'

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
