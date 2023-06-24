import { defaultApi } from '~components/api/utils/api';

import { apiMessageParser } from '../utils/utils';

import { SendMessageRequest, SendMessageResponse } from './types';

export const sendMessage = async (request: SendMessageRequest): Promise<SendMessageResponse> => {
  const { messages } = request;

  const apiMessages = apiMessageParser(messages);

  const apiRequestBody = {
    model: 'gpt-3.5-turbo',
    messages: apiMessages,
  };

  const response = await defaultApi.post('/chat/completions', apiRequestBody);

  return response.data;
};
