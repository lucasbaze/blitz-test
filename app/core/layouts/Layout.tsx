import { ReactNode } from 'react';
import { Head, Link } from 'blitz';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'with-welcome'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href='/'>
        <a className='button small'>
          <strong>Home</strong>
        </a>
      </Link>

      {children}
    </>
  );
};

export default Layout;
