import React, {useEffect} from 'react';
import {OnboardView} from 'organisms';
import {View, Text} from 'react-native';
import {commonScreenStyle} from '../screen.style';
import {AModal} from 'molecules';

const OnboardScreen = ({navigation}: any) => {
  return (
    <View style={commonScreenStyle.container}>
      <OnboardView
        onClickStaff={() => navigation.navigate('Staff_Screen')}
        onClickPatient={() => navigation.navigate('Make_Appointment')}
      />
    </View>
  );
};
export {OnboardScreen};
