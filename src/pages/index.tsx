import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import utilStyle from '../styles/utils.module.css';
import Link from 'next/link';
import { getPostsData } from '@/lib/post';
import type { NextPage, InferGetStaticPropsType } from 'next';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

//SSGの場合
export const getStaticProps = async () => {
  const allPostsData = getPostsData();
  // console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
};

// //SSRの場合
// export const getServerSideProps = async (/* context */) => {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     },
//   };
// };

const Home: NextPage<Props> = (props) => {
  const { allPostsData } = props;
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          {/* 私はフロントエンドエンジニアで、UI/UX設計やバックエンド開発の経験もあります。得意な言語はTypeScriptです。 */}
        </p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <span className={utilStyle.boldText}>{title}</span>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
