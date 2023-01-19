import React, {useEffect, useState} from 'react';
import {StaffView} from 'organisms';
import {View, Text} from 'react-native';
import {commonScreenStyle} from '../screen.style';
import {useDispatch, useSelector} from 'react-redux';
import {getAllAppointments} from '../../features/appointment/appointmentSlice';
import {ACard} from 'molecules';

const StaffScreen = () => {
  const dispatch: any = useDispatch();
  const {appointments, loading, error} = useSelector(
    state => state.appointment,
  );

  useEffect(() => {
    dispatch(getAllAppointments());
  }, []);

  if (error) {
    return (
      <View style={commonScreenStyle.container}>
        <Text>Network Error</Text>
      </View>
    );
  } else {
    return (
      <View style={commonScreenStyle.container}>
        {loading ? (
          <Text>loading</Text>
        ) : (
          <StaffView appointments={appointments} />
        )}
      </View>
    );
  }
};

export {StaffScreen};
