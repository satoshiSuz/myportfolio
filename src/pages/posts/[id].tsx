import Layout, { siteTitle } from '@/components/Layout';
import { getAllPostsIds, getPostData } from '@/lib/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id as string;
  const postData = await getPostData(id);

  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
};

export default Post;
