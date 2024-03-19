import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from './screens/Products';
import Cart from './screens/Cart';
import Favourites from './screens/Favourites';
import Profile from './screens/Profile';
import CustomBottomTab from './components/CustomBottomTab';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group screenOptions={{headerShown: false}}>
        <Tab.Screen
          options={{tabBarLabel: 'Products'}}
          name="products"
          component={Products}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Cart'}}
          name="cart"
          component={Cart}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Favourites'}}
          name="favourites"
          component={Favourites}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Profile'}}
          name="profile"
          component={Profile}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
