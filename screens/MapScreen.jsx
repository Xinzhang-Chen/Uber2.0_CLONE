import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateScreen from '../components/NavigateScreen';
import RideOptionScreen from '../components/RideOptionScreen';

const MapScreen = () => {
  const stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <stack.Navigator>
          <stack.Screen name="NavigateScreen" component={NavigateScreen} options={{ headerShown: false }} />
          <stack.Screen name="RideOptionScreen" component={RideOptionScreen} options={{ headerShown: false }} />
        </stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
const styles = StyleSheet.create({});
