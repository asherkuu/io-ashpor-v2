import Head from "next/head";
import { NextPage } from "next";
import { motion } from "framer-motion";

import { GridItemStyle } from "../common/grid-item";

import { ReactNode } from "typings";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout: NextPage<LayoutProps> = ({ children, title = "" }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <Head>
      <title>Asher Kim{title && `: ${title}`}</title>
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
    </Head>
    {children}

    <GridItemStyle />
  </motion.article>
);

export default Layout;
