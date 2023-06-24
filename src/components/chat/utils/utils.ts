import { Message, SendMessageResponse } from '../hooks/types';

const systemMessage = {
  role: 'system',
  content: '',
};

export const apiMessageParser = (messages: Message[]) => {
  const parsedMessages = messages.map(message => {
    const { content, role } = message;
    return {
      content,
      role,
    };
  });
  return [systemMessage, ...parsedMessages];
};

export const parseResponse = (data: SendMessageResponse): Message | null => {
  const content = data?.choices?.[0]?.message?.content;
  const role = data?.choices?.[0]?.message?.role;
  if (!content || !role) {
    return null;
  }
  return {
    role,
    content,
  };
};
