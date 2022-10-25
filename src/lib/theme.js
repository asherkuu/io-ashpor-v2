import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FAEEE7", "#202023")(props),
    },
    blockquote: {
      bg: mode("#f8f9fa", "#56575c")(props),
      margin: 0,
      paddingLeft: 35,
      borderLeftWidth: 5,
      borderColor: "#668efd",
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
  Box: {
    baseStyle: (props) => ({
      blockquote: { backgroundColor: mode("#f8f9fa", "#222222")(props) },
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
