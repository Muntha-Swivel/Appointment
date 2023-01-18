import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native';
import {IDateInput} from './DateInput.interface';

const DateInput = ({isOpen, onConfirm, onCancel, style, date}: IDateInput) => {
  //const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
      <DatePicker
        modal
        open={isOpen}
        date={date}
        mode="date"
        onConfirm={onConfirm}
        onCancel={onCancel}
        style={style}
      />
    </>
  );
};
export {DateInput};
