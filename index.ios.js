import { AppRegistry } from 'react-native';
// import Root from './src/root';
import Root from './src/root';
import CodePush from "react-native-code-push";

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
App = CodePush(codePushOptions)(Root);
AppRegistry.registerComponent('coin_ticker', () => App);
