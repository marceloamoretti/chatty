import React, { FC, memo } from 'react';
import { Text, View } from 'react-native';

import AnimatedDots from '~components/chat/animatedDots/AnimatedDots';
import { Message } from '~components/chat/hooks/types';

import incomingStyles from '../incomingBubble/styles';

import styles from './styles';

type Props = {
  isLastMessage: boolean;
  isLoading: boolean;
  message: Message;
};

const OwnBubble: FC<Props> = memo<Props>(({ message, isLastMessage, isLoading }) => (
  <>
    <View style={styles.ownMessageContainer}>
      <Text style={styles.ownMessageText}>{message.content}</Text>
    </View>
    {isLoading && isLastMessage && (
      <View style={incomingStyles.MessageContainer}>
        <AnimatedDots />
      </View>
    )}
  </>
));

export default OwnBubble;
