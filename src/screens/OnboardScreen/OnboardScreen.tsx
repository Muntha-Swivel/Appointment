import React from 'react';
import {OnboardView} from 'organisms';
import {View, Button} from 'react-native';
import {styles} from './OnboardScreen.style';

const OnboardScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <OnboardView
        onClickStaff={() => navigation.navigate('Home')}
        onClickPatient={() => console.log('hello')}
      />
    </View>
  );
};
export {OnboardScreen};
