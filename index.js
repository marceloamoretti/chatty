/**
 * @format
 */
import './src/components/translation/i18n.config';

import { AppRegistry } from 'react-native';

import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
