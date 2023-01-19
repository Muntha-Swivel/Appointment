import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {OnboardScreen, MakeAppointmentScreen, StaffScreen} from '../../screens';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={OnboardScreen} />
      <Stack.Screen
        name="Make_Appointment"
        component={MakeAppointmentScreen}
        options={{title: 'Make Appointment'}}
      />
      <Stack.Screen
        name="Staff_Screen"
        component={StaffScreen}
        options={{title: 'Appointments'}}
      />
    </Stack.Navigator>
  );
};

export {StackNavigation};
