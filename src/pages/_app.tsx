import "../styles/globals.css";
import React, { useState, useEffect, useCallback } from "react";
import type { AppProps } from "next/app";

// @Layout
import AppLayout from "Layout/AppLayout";

// @components
import Loading from "components/loading";

// @AOS
import AOS from "aos";
import "aos/dist/aos.css";

// @near
import { initContract } from "near/utils";

//----------------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(true);
  const [inited, setInited] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    window.nearInitPromise = initContract()
      .then(() => setInited(true))
      .catch(console.error);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const handleHover = () => {
    if (isConnected) {
      setIsHovered(!isHovered);
    }
  };

  const handleConnectClick = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleConnectClick}
    >
      {inited ? (
        loaded ? (
          <Loading />
        ) : (
          <AppLayout>
            <Component
              {...pageProps}
              isConnected={isConnected}
              isHovered={isHovered}
            />
          </AppLayout>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default MyApp;
