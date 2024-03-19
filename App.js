import {StatusBar, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/BottomTabs';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'teal'} barStyle={'light-content'} />
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
