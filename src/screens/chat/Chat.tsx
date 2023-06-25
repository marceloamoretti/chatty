import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ChatInput from '~components/chat/chatInput/ChatInput';
import { useChat } from '~components/chat/hooks/useChat';
import MessagesList from '~components/chat/messageList/MessageList';
import { theme } from '~components/ui/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bgPrimary,
  },
});

const Chat: FC = memo(() => {
  const [message, setMessage] = useState('');
  const { messages, handleSend, isLoading } = useChat();
  const safeArea = useSafeAreaInsets();

  const handleSendCallback = useCallback(() => {
    handleSend(message);
    setMessage('');
    Keyboard.dismiss();
  }, [message, handleSend]);

  const container = useMemo(
    () => [styles.container, { paddingTop: safeArea.top, paddingBottom: safeArea.bottom }],
    [safeArea]
  );

  return (
    <KeyboardAvoidingView style={container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <MessagesList messages={messages} isLoading={isLoading} />
      <ChatInput
        value={message}
        onChangeText={setMessage}
        onSubmitEditing={handleSendCallback}
        isLoading={isLoading}
      />
    </KeyboardAvoidingView>
  );
});

export default Chat;
