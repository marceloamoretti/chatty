import { StyleSheet } from 'react-native';

import { theme } from '~components/ui/theme';

const styles = StyleSheet.create({
  MessageContainer: {
    backgroundColor: theme.colors.white20,
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: '5%',
    maxWidth: '80%',
    alignSelf: 'flex-start',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
  },

  MessageText: {
    fontSize: 16,
    color: theme.colors.secondary,
    fontFamily: theme.fontFamily.regular,
  },
});

export default styles;
