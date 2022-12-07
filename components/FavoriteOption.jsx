import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';

const FavoriteOption = () => {
  const data = [
    {
      id: '123',
      icon: 'home',
      location: 'Home',
      destination: '41-45 Belmore street, Ryde',
    },
    {
      id: '456',
      icon: 'briefcase',
      location: 'Work',
      destination: 'UNSW, Kingsford',
    },
  ];
  return (
    <FlatList
      data={data}
      alwaysBounceVertical={false}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={[tw`bg-gray-300`, { height: 0.5 }]} />}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon style={tw`mr-4 rounded-full bg-gray-300 p-3`} name={item.icon} type="ionicon" color="white" size={18} />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default FavoriteOption;

const styles = StyleSheet.create({});
