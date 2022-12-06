import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import tw from 'twrnc';
import NavOption from '../components/NavOption';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'http://links.papareact.com/gzs',
          }}
        />
        <NavOption />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});