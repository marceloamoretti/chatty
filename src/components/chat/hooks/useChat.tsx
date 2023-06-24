import { useCallback, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { parseResponse } from '../utils/utils';

import { sendMessage } from './chatService';
import { Message, Role } from './types';

const MOCKED_MESSAGE: Message = {
  role: Role.SYSTEM,
  content: 'You are now chatting with Chat GPT 3.5',
};

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([MOCKED_MESSAGE]);

  const mutation = useMutation(sendMessage);

  const handleSend = useCallback(
    (message: string) => {
      if (message.trim().length === 0) return;

      const userMessage: Message = { role: Role.USER, content: message };
      setMessages(prevMessages => [...prevMessages, userMessage]);

      mutation.mutate(
        { message, messages: [...messages, userMessage] },
        {
          onSuccess: data => {
            const assistantMessage = parseResponse(data);
            if (assistantMessage) {
              setMessages(prevMessages => [...prevMessages, assistantMessage]);
            }
          },
        }
      );
    },
    [mutation, messages]
  );

  return { messages, handleSend, isLoading: mutation.isLoading, onSuccess: mutation.isSuccess };
};
