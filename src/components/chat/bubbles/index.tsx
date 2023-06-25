import React, { memo } from 'react';

import { Message, Role } from '../hooks/types';

import IncomingBubble from './incomingBubble/IncomingBubble';
import OwnBubble from './ownBubble/ownBubble';

type Props = {
  isLastMessage: boolean;
  isLoading: boolean;
  message: Message;
};

const Bubbles = memo<Props>(({ message, isLastMessage, isLoading }) => {
  if (message.role === Role.USER) {
    return <OwnBubble message={message} isLastMessage={isLastMessage} isLoading={isLoading} />;
  }
  return <IncomingBubble message={message} />;
});

export default Bubbles;
