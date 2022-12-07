import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateScreen from '../components/NavigateScreen';
import RideOptionScreen from '../components/RideOptionScreen';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const stack = createStackNavigator();
  const navigate = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigate.navigate('HomeScreen')}
        style={[tw`bg-gray-100 absolute top-16 left-8 p-3 rounded-full shadow-lg`, { zIndex: 1000 }]}
      >
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tw`h-2/5`}>
        <Map />
      </View>

      <View style={tw`h-3/5`}>
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
