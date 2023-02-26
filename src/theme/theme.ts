import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: 'gray.600',
      },
    },
    ListItem: {
      baseStyle: {
        color: 'gray.600',
      },
    },
  },
});
