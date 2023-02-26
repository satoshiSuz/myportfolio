import { MdCheckBox } from 'react-icons/md';
import Layout, { siteTitle } from '@/components/Layout';
import NextLink from 'next/link';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { AppList } from '@/components/AppList';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Stack spacing={{ base: '20px', md: '40px' }}>
        <Stack>
          <Heading fontSize={{ base: 'lg', md: '2xl' }}>はじめに</Heading>

          <Text fontSize={{ base: 'sm', md: 'md' }} ps='3'>
            私はフロントエンドエンジニアで、実務ではVue,pug,sassを用いたフロントエンド構築やUI設計を担当しています。UX設計やウォーターフォール開発のPM経験もあり、個人ではバックエンド開発の経験もあります。得意な言語はTypeScriptです。
          </Text>
        </Stack>
        <Stack>
          <Heading fontSize={{ base: 'lg', md: '2xl' }}>技術スタック</Heading>
          <List spacing={2} fontSize={{ base: 'sm', md: 'md' }} ps='3'>
            <ListItem>
              <ListIcon as={MdCheckBox} color='teal.300' />
              <Text as='span'>HTML/CSS/PUG/Sass</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckBox} color='teal.300' />
              <Text as='span'>Javascript/Typescript/Python</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckBox} color='teal.300' />
              <Text as='span'>React/Vue/Redux/Recoil/Next.js</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckBox} color='teal.300' />
              <Text as='span'>Node.js/Express.js</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckBox} color='teal.300' />
              <Text as='span'>MongoDB/Firebase/Vercel</Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckBox} color='teal.300' />
              <Text as='span'>GraphQL</Text>
            </ListItem>
          </List>
        </Stack>
        <Stack>
          <AppList />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Home;
