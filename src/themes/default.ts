import {
  extendTheme,
  Theme,
  theme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const customTheme = {
  ...theme,
  config: {
    ...theme.config,
    initialColorMode: "dark"
  },
  colors:{
    ...theme.colors,
    "primary":{
      main:'#42E2B8',
      100: '#60e6c2',
      200: '#42E2B8',
      300: '#3de1b5',
      400: '#2bdeae',
      500: '#21d4a4',
      600: '#1ec296',
      700: '#1cb089',
      800: '#199f7b',
      900: '#168d6d'
    },
  },
  components:{
    ...theme.components,
    Input:{
      defaultProps:{
        focusBorderColor:"primary.main",
      }
    },
    Checkbox:{
      defaultProps:{
        borderColor: 'inherit'
      }
    }
  },
  semanticTokens:{
    ...theme.semanticTokens,
    colors:{
      "chakra-body-bg":{
        _light:'#ecf0f1',
        _dark:'#1A202C'
      },
      // "chakra-header-divider":{
      //   _light:'#1A202C33',
      //   _dark:'#ecf0f133',
      // },
      "text-secondary":{
        _light: "#333",
        _dark:"#ccc",
      },
      primary:{
        _dark:'primary.200',
        _light:'primary.500'
      },
      "card-background":{
        default:'#fff',
        _dark:'#2D3748'
      },
    }
  }
};

export default extendTheme(
  customTheme
);