import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      blueJeans: '#61A7E1',
      onyx: '#393E41',
      mintCream: '#F7FFF6',
      mayGreen: '#2E933C',
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: 'brand.mintCream',
      },
    },
    Textarea: {
      baseStyle: {
        color: 'brand.mintCream',
      },
    },
    Input: {
      baseStyle: {
        color: 'brand.mintCream',
      },
    },
    Heading: {
      baseStyle: {
        color: 'brand.mintCream',
      },
    },
    Link: {
      variants: {
        header: {
          color: 'brand.onyx',
          margin: '0 !important',
          fontSize: '20px',
          padding: '0 24px',
          _hover: {
            textDecoration: 'none',
          },
          _focus: {
            outline: '1px solid #F7FFF6',
          },
        },
        hamburgerMenu: {
          color: 'brand.onyx',
          margin: '0 !important',
          fontSize: '24px',
          fontWeight: '600',
          padding: '16px 0px',
          _hover: {
            textDecoration: 'none',
          },
          _focus: {
            outline: '1px solid #F7FFF6',
          },
        },
        body: {
          color: 'brand.mintCream',
          _hover: {
            textDecoration: 'none',
          },
        },
        content: {
          textDecoration: 'underline',
        },
      },
    },
    Container: {
      variants: {
        blogPost: {
          margin: '12px',
          padding: '6',
          maxWidth: '250px',
          cursor: 'pointer',
          borderColor: 'brand.onyx',
          borderWidth: '1px',
          _hover: {
            borderColor: 'brand.mintCream',
            borderWidth: '1px',
            borderRadius: 'lg',
          },
        },
      },
    },
  },
})

export default theme
