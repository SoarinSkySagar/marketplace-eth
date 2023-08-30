import '@styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

const Noop = ({children}) => <>{children}</>

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics/>
    </Layout>
  )
}

export default MyApp
