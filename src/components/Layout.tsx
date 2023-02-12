import Head from 'next/head';
import { FC, ReactNode } from 'react';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const NAME = 'shincode';
export const siteTitle = 'Next,js blog';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <img className={utilStyles.borderCircle} src='/images/profile.png' />
        <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
