import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { Message } from '~components/chat/hooks/types';

import styles from './styles';

type Props = {
  message: Message;
};
const IncomingBubble = memo<Props>(({ message }) => (
  <View style={styles.MessageContainer}>
    <Text style={styles.MessageText}>{message.content}</Text>
  </View>
));

export default IncomingBubble;
