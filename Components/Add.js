import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, AppRegistry } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Slider } from '@miblanchard/react-native-slider';


const DatePicker = () => {
  const today = new Date();
  const dateTransformaation = (date) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const todayStr = `${weekday[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}`;

    return todayStr;
  }
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [chosenDate, setChosenDate] = useState('Today ' + dateTransformaation(today))

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setChosenDate(dateTransformaation(date))
    hideDatePicker();
  };

  return (
    <View>
      <Button title={chosenDate} onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const MoodSlider = () => {
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <View style={{width: 200}}>
      <Slider
          minimumValue={1}
          maximumValue={10}
          step={1}
          trackMarks={[1, 5, 10]}
          value={sliderValue}
          onValueChange={value => setSliderValue(value)}
      />
      <Text>Value: {sliderValue}</Text>
    </View>
  )
}

const SelectOne = () => {

  return (
    <View>
      <Button
        // onPress={onPressLearnMore}
        title="Yes"
        color="#841584"
        accessibilityLabel="Yes"
      />
      <Button
        // onPress={onPressLearnMore}
        title="No"
        color="#841584"
        accessibilityLabel="No"
      />
    </View>
  )
}

export default function Add() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>How are you?</Text>
      <DatePicker />
      <Text>Mood?</Text>
      <MoodSlider />
      <Text>:)                                           :(</Text>
      <Text>Taking ketamine?</Text>
      <SelectOne />
      <TextInput
        placeholder="Anything to add?"
      />
      <Button
        // onPress={onPressLearnMore}
        title="+"
        color="#841584"
        accessibilityLabel="Add"
      />
    </View>
  );
}