import React, { memo, useCallback, useEffect, useRef } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

import { theme } from '~components/ui/theme';

import Bubbles from '../bubbles';
import { Message } from '../hooks/types';

type Props = {
  isLoading: boolean;
  messages: Message[];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: theme.colors.bgPrimary,
  },
  chatListContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
});

const MessagesList: React.FC<Props> = memo(({ messages, isLoading }) => {
  const FlatListRef = useRef<FlatList>(null);

  useEffect(() => {
    setTimeout(() => FlatListRef?.current?.scrollToEnd({ animated: true }), 100);
  }, [messages]);

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<Message>) => {
      const isLastMessage = index === messages.length - 1;
      return <Bubbles message={item} isLoading={isLoading} isLastMessage={isLastMessage} />;
    },
    [isLoading, messages]
  );
  const keyExtractor = useCallback((item: Message, index: number) => index.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={FlatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.chatListContent}
      />
    </View>
  );
});

export default MessagesList;
