import React, { FC, memo, useCallback } from 'react';
import { Image, Keyboard, TextInput, TouchableOpacity, View } from 'react-native';

import Send from '~assets/icons/send/send.png';

import styles from './styles';

type Props = {
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  value: string;
  isLoading?: boolean;
};

const ChatInput: FC<Props> = memo<Props>(({ value, onChangeText, onSubmitEditing, isLoading }) => {
  const handleSubmitEditing = useCallback(() => {
    onSubmitEditing();
    Keyboard.dismiss();
  }, [onSubmitEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          value={value}
          onSubmitEditing={handleSubmitEditing}
          multiline
          autoFocus
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={handleSubmitEditing} disabled={isLoading || !value}>
            <Image source={Send} style={styles.sendIcon} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default ChatInput;
