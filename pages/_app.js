import "./style.css";
import { CoreBlockchain } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

import React from "react";
export default function MyApp({ Component: Component, pageProps: pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={CoreBlockchain}
      clientId="YOUR_CLIENT_ID" // You can get a client id from dashboard settings
    >
      <Component {...pageProps} />;
    </ThirdwebProvider>
  );
}
