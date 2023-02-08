import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import Home from '../screens/Home';
import New from '../screens/New';
import Habit from '../screens/Habit';

export enum ROUTES {
  home = 'home',
  new = 'new',
  habit = 'habit',
}

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ROUTES.home} component={Home} />
      <Screen name={ROUTES.new} component={New} />
      <Screen name={ROUTES.habit} component={Habit} />
    </Navigator>
  );
}
