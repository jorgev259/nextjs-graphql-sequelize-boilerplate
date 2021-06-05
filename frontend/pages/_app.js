import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'

import './styles/index.css'
import './styles/App.css'

export default function App ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
