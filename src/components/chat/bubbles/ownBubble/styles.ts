import { StyleSheet } from 'react-native';

import { theme } from '~components/ui/theme';

const styles = StyleSheet.create({
  ownMessageContainer: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    marginLeft: '20%',
    marginTop: 5,
    marginBottom: 5,
    marginRight: '5%',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    borderRadius: 15,
    borderBottomRightRadius: 0,
  },
  ownMessageText: {
    fontSize: 16,
    color: 'white',
    fontFamily: theme.fontFamily.regular,
  },
});

export default styles;
