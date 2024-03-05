import React, { useState } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import Routes from './src/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 0,
          },
        },
      }),
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <QueryClientProvider client={queryClient}>
        <Routes isLoggedIn={false} />
      </QueryClientProvider>
    </SafeAreaView>
  );
}

export default App;
