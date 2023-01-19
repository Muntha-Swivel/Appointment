import React from 'react';
import {View, Text} from 'react-native';
import {commonScreenStyle} from '../screen.style';
import {MakeAppointmentView} from 'organisms';
const MakeAppointmentScreen = () => {
  return (
    <View style={commonScreenStyle.container}>
      <MakeAppointmentView />
    </View>
  );
};

export {MakeAppointmentScreen};
