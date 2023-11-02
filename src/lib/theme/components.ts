import { theme } from "@chakra-ui/react";

const components = {
  Button: {
    // 1. We can update the base styles
    baseStyle: {
      fontWeight: "bold", // Normally, it is "semibold"
      fontFamily: "inherit",
      fontSize: "nm",
      outline: "1px solid white",
      outlineOffset: "0px",
      _focus: {
        // shadow: "0 0 0 0px transparent",
      },
      _active: {
        // shadow: "0 0 0 transparent",
      },
    },
    // 2. We can add a new button size or extend existing

    // 3. We can add a new visual variant
    // you can also use the variants responsively
    // <Button variant={{ base: 'base', md: 'md' }}>Object syntax</Button>
    // the button will be orange after the `sm` breakpoint due to the array syntax
    variants: {
      danger: {
        bg: "brand.1500",
        color: "white",
        fontSize: "nm",
        px: "40px",
        rounded: "6px",
        height: "50px",
        _hover: {
          _disabled: {
            bg: "auto",
          },
        },
      },
      success: {
        bg: "brand.600",
        color: "white",
        fontSize: "nm",
        px: "40px",
        rounded: "6px",
        height: "50px",
        _hover: {
          _disabled: {
            bg: "auto",
          },
        },
      },
      primary: {
        ...theme.components.Button.variants?.solid,
        bg: "brand.green",
        color: "white",
        fontSize: "nm",
        // px: "40px",
        rounded: "2px",
        height: "40px",
        _hover: {
          _disabled: {
            bg: "auto",
          },
        },
        _focus: {
          shadow: "0 0 0 3px #24694F",
        },
      },
      gold: {
        ...theme.components.Button.variants?.solid,
        bg: "brand.gold",
        color: "brand.darkest",
        fontSize: "nm",
        // px: "40px",
        rounded: "2px",
        height: "40px",
        _hover: {
          _disabled: {
            bg: "auto",
          },
        },
        _focus: {
          shadow: "0 0 0 3px #E5C05C",
        },
      },
      primary_outline: {
        ...theme.components.Button.variants?.outline,
        bg: "transparent",
        color: "brand.primary",
        borderColor: "brand.primary",
        border: "1px solid",
        fontSize: "nm",
        // px: "40px",
        rounded: "6px",
        height: "40px",
        _hover: {
          bg: "#3E409510",
          _disabled: {
            bg: "auto",
          },
        },
        _focus: {
          shadow: "0 0 0 2px #3E4095",
        },
      },
      fade_outline: {
        ...theme.components.Button.variants?.outline,
        bg: "transparent",
        color: "brand.darkest",
        border: "1px solid #EBEBF2",
        fontSize: "nm",
        // px: "40px",
        rounded: "6px",
        height: "40px",
        _hover: {
          bg: "",
          _disabled: {
            bg: "auto",
          },
        },
      },

      secondary: {
        ...theme.components.Button.variants?.outline,
        fontFamily: "Satoshi-Bold",
        bg: "brand.primary",
        color: "brand.light",
        rounded: "6px",
        px: "40px",
        height: "50px",
        fontSize: "nm",
        _hover: {
          _disabled: {
            bg: "auto",
          },
        },
      },
    },
    // 6. We can overwrite defaultProps
    defaultProps: {
      size: "md", // default is md
      variant: "solid", // default is solid
      // colorScheme: "teal",
    },
  },
};

export default components;
