import { StyleSheet } from 'react-native';

import { theme } from '~components/ui/theme';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: theme.borderRadius.radiusRounded,
    borderColor: theme.colors.white80,
    borderWidth: 1,
    backgroundColor: theme.colors.white10,
    shadowColor: theme.colors.white20,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    alignSelf: 'center',
    marginBottom: 60,
    maxHeight: 100,
  },

  textInputWrapper: {
    flexDirection: 'row',
    padding: 8,
  },

  textInput: {
    flex: 1,
    fontSize: theme.fontSizes.regular,
    fontFamily: theme.fontFamily.regular,
    color: 'white',
  },

  buttonWrapper: {
    justifyContent: 'center',
    paddingLeft: 10,
  },

  sendIcon: { width: 36, height: 36 },
});

export default styles;
