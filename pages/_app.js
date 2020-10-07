import './app.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => (
    <div className="app">
        <Head>
            <title>Cher 👩‍💻🔥 •x•</title>
            <meta content="Cher 👩‍💻🔥 Principal Software Engineer" property="og:title" />
            <link href="/favicon.png" rel="shortcut icon" type="image/x-icon" />
            <link href="/favico_32.png" rel="apple-touch-icon" />
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta content="Cher 👩‍💻🔥 Principal Software Engineer" property="og:title" />
            <meta content="Website for Cher, Principal software engineer and hot sauce maker." property="og:description" />
            <meta content="Website for Cher, Principal software engineer and hot sauce maker." property="twitter:description" />
            <meta content="summary" name="twitter:card" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta property="og:image" content="https://cherscarlett.github.io/assets/card.png" />
            <meta property="twitter:image" content="https://cherscarlett.github.io/assets/card.png" />
            <meta name="twitter:site" content="@cherthedev" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </div>
);
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp;
