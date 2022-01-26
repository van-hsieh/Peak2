import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import fakeData from '../fakeData.json'

const Entry = (data) => {

  return (
    <View key={data.date} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'black', padding: 40}}>
      <Text>{data.date}</Text>
      <Text>{data.mood}</Text>
      <Text>{data.journal}</Text>
      <Text>{data.tookKetamine}</Text>
    </View>
  )
}

export default function Entries() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView>
        {fakeData.map(data => Entry(data))}
      </ScrollView>
    </SafeAreaView>
  );
}