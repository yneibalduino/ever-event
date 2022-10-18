import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '../screens/Home';
import { Payment } from '../screens/Payment';
import { EventDetails } from '../screens/EventDetails';
import { EventList } from '../screens/EventList';
import { Checkout } from '../screens/Checkout';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name='home'
        component={Home}
      />
      <Screen 
        name='payment'
        component={Payment}
      />
      <Screen 
        name='eventDetails'
        component={EventDetails}
      />
      <Screen 
        name='eventList'
        component={EventList}
      />
      <Screen 
        name='checkout'
        component={Checkout}
      />
    </Navigator>
  )
}