import Head from 'next/head';
import { Container } from './Container';
import { ThemeToggle } from './ThemeToggle';

interface PageHeaderProps {
  title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
      </Head>
      <header className="bg-gray-900 text-white dark:bg-gray-800 p-4 pl-14 lg:pl-4 lg:h-16 shadow-md sticky top-0 mb-8 lg:mb-0 z-40 lg:z-50">
        <Container>
          <div className="flex justify-between">
            <h1 className="text-lg font-medium">
              <a href="#top">{title}</a>
            </h1>
            <ThemeToggle />
          </div>
        </Container>
      </header>
    </>
  );
};
