import Index from './app/index';
import {AppRegistry} from 'react-native';
import {name as HelloWorld} from './app.json';
AppRegistry.registerComponent(HelloWorld, () => Index);
