/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { memo, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '~components/api/QueryProvider';
import Chat from '~screens/chat/Chat';

const App = memo(() => {
  useEffect(() => {
    void RNBootSplash.hide({ fade: true, duration: 500 });
  }, []);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Chat />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
});

export default App;
