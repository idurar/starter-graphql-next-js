import 'antd/dist/antd.css';
import '@/styles/app.scss';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/apollo';
import { DefaultLayout } from '@/layout';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ApolloProvider>
  );
}
export default MyApp;
