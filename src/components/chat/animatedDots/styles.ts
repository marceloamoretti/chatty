import { StyleSheet } from 'react-native';

import { theme } from '~components/ui/theme';

const styles = StyleSheet.create({
  typing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typingDot: {
    width: 10,
    height: 10,
    marginHorizontal: 4,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.radiusRounded,
  },
});

export default styles;
