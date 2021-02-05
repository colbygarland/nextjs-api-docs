import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ToastProvider } from 'react-toast-notifications';
import { StoreProvider, rootStore } from '../stores/RootStore';
import { PageHeader } from '../components/PageHeader';
import { Menu } from '../components/Menu';
import { PageFooter } from '../components/PageFooter';
import Docs from '../docs/docs.json';
import { Loader } from '../components/Loader';
import { Toast } from '../components/Toast';
require('typeface-inter');

const App = observer(({ Component, pageProps }: AppProps) => {
  const { themeStore } = rootStore;

  useEffect(() => {
    themeStore.setEndpoints(Docs.endpoints);
    themeStore.setDataModels(Docs.models);
  }, [themeStore.endpoints, themeStore.dataModels]);

  const renderPage = () => {
    if (themeStore.servicesCount === 0) {
      return <Loader />;
    }
    return (
      <div className="lg:flex">
        <Menu services={themeStore.endpoints} dataModels={themeStore.dataModels} />
        <div className="lg:inline-block">
          <Component {...pageProps} />
        </div>
      </div>
    );
  };

  return (
    <ToastProvider autoDismiss autoDismissTimeout={3000} components={{ Toast: Toast }}>
      <StoreProvider value={rootStore}>
        <div className={themeStore.theme} id="top">
          <div className="dark:bg-gray-900">
            <PageHeader title="NextJS Api Doc Viewer" />
            {renderPage()}
            <PageFooter />
          </div>
        </div>
      </StoreProvider>
    </ToastProvider>
  );
});

export default App;
