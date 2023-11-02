// 1. Import the extendTheme function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import components from "./components";
import { colors, fonts, fontSizes } from "./config";

// DarkMode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Global Styles
const styles = {
  global: {
    body: {
      color: "brand.darkest",
      fontSize: "sm",
    },
    p: {
      fontSize: "sm",
      lineHeight: "1.4",
      color: "inherit",
    },
  },
};

//  Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  fonts,
  colors,
  fontSizes,
  styles,
  components,
  config,
});

export default theme;
