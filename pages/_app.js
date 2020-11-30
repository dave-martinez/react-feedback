import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../lib/auth';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Head>
          <title>React Feedback</title>
        </Head>
        <Component {...pageProps} />;
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
