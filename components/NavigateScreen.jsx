import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, KeyboardAwareScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { selectGreeting, setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import FavoriteOption from './FavoriteOption';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';

const NavigateScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const greeting = useSelector(selectGreeting);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>{greeting}, mate</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View extraScrollHeight={75}>
          <GooglePlacesAutocomplete
            styles={{
              container: { flex: 0, paddingTop: 20, backgroundColor: 'white' },
              textInput: { fontSize: 18, backgroundColor: '#DDDDDF' },
              textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
            }}
            keepResultsAfterBlur={true}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            placeholder="Where to?"
            minLength={2}
            enablePoweredByContainer={false}
            fetchDetails={true}
            returnKeyType={'search'}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigate.navigate('RideOptionScreen');
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
          />
        </View>
        <FavoriteOption />
      </View>

      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          style={tw`flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
          onPress={() => navigate.navigate('RideOptionScreen')}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Ride</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex-row justify-between bg-gray-300 w-24 px-4 py-3 rounded-full`}>
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
          <Text style={tw`text-black text-center`}>Eat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateScreen;

const styles = StyleSheet.create({});
