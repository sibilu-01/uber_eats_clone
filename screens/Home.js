import { View, Text } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <View>
      <Header/>
      <SearchBar/>
    </View>
  );
}
