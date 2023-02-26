import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import NextLink from 'next/link';

type AppList = {
  name: string;
  image: string;
  url: string;
  tech: string;
};
const apps: Array<AppList> = [
  //   {
  //     name: 'Twitterクローンアプリ',
  //     image: '/images/logo-twitter.png',
  //     url: '/',
  //     tech: 'React/Materiul UI/Firebase',
  //     git: '/',
  //   },
  {
    name: 'Notionクローンアプリ',
    image: '/images/logo-notion.png',
    url: 'https://notion-clone-client.onrender.com/',
    tech: 'React/Materiul UI/MongoDB/Node.js/Express.js',
  },
];

export const AppList = () => {
  return (
    <>
      <Heading fontSize={{ base: 'lg', md: '2xl' }}>作品</Heading>
      <Wrap ps='3'>
        {apps.map((app) => {
          return (
            <WrapItem>
              <NextLink href={app.url}>
                <Box
                  w={{ base: '230px', md: '240px' }}
                  h={{ base: '220px', md: '240px' }}
                  bg='white'
                  _hover={{ bg: 'teal.100' }}
                  transition='ease 0.3s'
                  border='1px solid gray.200'
                  padding={4}
                  borderRadius='md'
                >
                  <VStack>
                    <Image src={app.image} h={{ base: '60px', md: '70px' }} />
                    <Text fontSize={{ base: 'sm', md: 'md' }}>{app.name}</Text>
                    <Divider color='gray.200' />
                    <Box>
                      <Text
                        fontSize={{ base: 'sm', md: 'sm' }}
                        wordBreak='break-all'
                      >
                        {app.tech}
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </NextLink>
            </WrapItem>
          );
        })}
      </Wrap>
    </>
  );
};
