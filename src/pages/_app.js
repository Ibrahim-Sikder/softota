import '../styles/globals.css'
import Layout from '../../components/Layout/Layout'
import { SessionProvider } from "next-auth/react"
import AuthProvider from './context/AuthContext/AuthProvider'

export default function App({  Component,
  pageProps: { session, ...pageProps }, }) {
  return <SessionProvider session={session}>
          <AuthProvider>
          <Layout><Component {...pageProps} /></Layout>
          </AuthProvider>
        </SessionProvider>
}


// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return <SessionProvider session={session}>
//   <Layout><Component {...pageProps} /></Layout>
// </SessionProvider>
// }