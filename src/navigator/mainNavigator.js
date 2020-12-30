import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings189255Navigator from '../features/Settings189255/navigator';
import UserProfile189248Navigator from '../features/UserProfile189248/navigator';
import Settings189247Navigator from '../features/Settings189247/navigator';
import Settings189245Navigator from '../features/Settings189245/navigator';
import SignIn2189243Navigator from '../features/SignIn2189243/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings189255: { screen: Settings189255Navigator },
UserProfile189248: { screen: UserProfile189248Navigator },
Settings189247: { screen: Settings189247Navigator },
Settings189245: { screen: Settings189245Navigator },
SignIn2189243: { screen: SignIn2189243Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
