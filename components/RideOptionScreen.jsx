import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTime } from '../slices/navSlice';

const RideOptionScreen = () => {
  const navigate = useNavigation();
  const [selected, setSelected] = React.useState(null);
  const travelTimeInfo = useSelector(selectTravelTime);

  const data = [
    {
      id: 'Uber-X',
      title: 'UberX',
      multiplier: 1,
      image: 'https://links.papareact.com/3pn',
    },
    {
      id: 'Uber-XL',
      title: 'Uber XL',
      multiplier: 1.2,
      image: 'https://links.papareact.com/5w8',
    },
    {
      id: 'Uber-LUX',
      title: 'Uber LUX',
      multiplier: 1.75,
      image: 'https://links.papareact.com/7pf',
    },
  ];

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-2 z-50 p-3 rounded-full`}
          onPress={() => navigate.navigate('NavigateScreen')}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>

        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInfo?.distance?.text}: {travelTimeInfo?.duration?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { title, image, multiplier }, item }) => {
          return (
            <TouchableOpacity
              style={tw`flex-row justify-between items-center px-10 ${title === selected?.title ? 'bg-gray-300' : ''}`}
              onPress={() => setSelected(item)}
            >
              <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: image }} />

              <View>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>{travelTimeInfo?.duration?.text} Travel time</Text>
              </View>

              <View>
                <Text style={tw`text-lg`}>
                  {new Intl.NumberFormat('en-AU', {
                    style: 'currency',
                    currency: 'AUD',
                    currencyDisplay: 'narrowSymbol',
                  }).format((travelTimeInfo?.duration?.value * multiplier) / 100)}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected ? 'opacity-30' : ''} `}>
        <Text style={tw`text-white text-center text-xl`}>Choose {selected?.title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RideOptionScreen;

const styles = StyleSheet.create({});
