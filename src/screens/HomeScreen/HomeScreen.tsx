import React from 'react';
import {View, Text} from 'react-native';
import {Form} from '../../components/molecules';
const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Form />
    </View>
  );
};

export {HomeScreen};
