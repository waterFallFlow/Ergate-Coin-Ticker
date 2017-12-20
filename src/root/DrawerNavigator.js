import { DrawerNavigator } from 'react-navigation';
import MarketScreen from '../containers/Market';
import ProfileScreen from '../containers/Profile';

export default DrawerNavigator(
  {
    Market:  { screen: MarketScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    drawerPosition: 'left',
    useNativeAnimations: true,
    drawerBackgroundColor: '#eeeeee',
    initialRouteName: 'Market',
    contentOptions: {
      activeTintColor: '#e91e63',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      }
    }    
  }
);