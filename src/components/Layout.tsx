import Head from 'next/head';
import { FC, ReactNode } from 'react';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react';

const NAME = 'Satoshi Suzuki';
export const siteTitle = 'Next,js blog';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Box bg='gray.50'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box px={4} bgColor='green.100'>
        <Container maxW='container.lg'>
          <Flex as='header' py='4' justifyContent='center' alignItems='center'>
            <Image
              mr={{ base: '10px', md: '20px' }}
              borderRadius='full'
              w={{ base: '50px', md: '100px' }}
              src='/images/profile.jpeg'
            />
            <Heading
              fontSize={{ base: 'xl', md: '3xl' }}
            >{`${NAME}'s Portfolio`}</Heading>
            <Box></Box>
          </Flex>
        </Container>
      </Box>
      <Box px={{ base: '20px', md: '30px' }} py={{ base: '10px', md: '20px' }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
