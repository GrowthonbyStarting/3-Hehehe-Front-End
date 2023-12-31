import type {AppProps} from 'next/app';

import ClientOnly from '@components/ClientOnly';
import {BackGround} from '@components/template';
import {useThemeMode} from '@hooks/media';
import {QueryClient, QueryClientProvider, Hydrate} from '@lib/react-query';
import {RecoilRoot} from '@lib/recoil';
import {ThemeProvider} from '@lib/styled-components';
import GlobalStyle from '@styles/global-styles';
import theme, {ColorScheme} from '@styles/theme';
import 'react-tooltip/dist/react-tooltip.css';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 12,
    },
  },
});

const MyApp = ({Component, pageProps}: AppProps) => {
  const themeMode = useThemeMode();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider
            theme={
              theme[themeMode === 'dark' ? ColorScheme.DARK : ColorScheme.LIGHT]
            }>
            <GlobalStyle />
            <ClientOnly>
              <BackGround>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
              </BackGround>
            </ClientOnly>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default MyApp;
