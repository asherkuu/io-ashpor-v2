import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";

import theme from "lib/theme";
import Fonts from "components/common/fonts";
import Layout from "components/layouts";
import { AnimatePresence } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <ToastContainer />
      </Layout>
    </ChakraProvider>
  );
};

export default appWithTranslation(App);
