import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native';
import {IDateInput} from './DateInput.interface';

const DateInput = ({
  isOpen,
  onConfirm,
  onCancel,
  style,
  date,
  mode,
}: IDateInput) => {
  return (
    <>
      <DatePicker
        modal
        open={isOpen}
        date={date}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={onCancel}
        style={style}
      />
    </>
  );
};
export {DateInput};
