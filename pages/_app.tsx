import "styles/index.scss";

import Head from "next/head";

import useCssMobileHeight from "hooks/useCssMobileHeight";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }) {
  useCssMobileHeight();

  return (
    <RecoilRoot>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} key="main" />
    </RecoilRoot>
  );
}

export default App;
