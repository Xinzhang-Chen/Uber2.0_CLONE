import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import FavoriteOption from './FavoriteOption';

const NavigateScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning, mate</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={{
              container: { flex: 0, paddingTop: 20, backgroundColor: 'white' },
              textInput: { fontSize: 18, backgroundColor: '#DDDDDF' },
              textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
            }}
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
    </SafeAreaView>
  );
};

export default NavigateScreen;

const styles = StyleSheet.create({});
