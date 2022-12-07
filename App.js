import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import { setGreeting } from './slices/navSlice';

// 1. Setup redux

export default function App() {
  const stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <stack.Navigator>
              <stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
              <stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
            </stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
