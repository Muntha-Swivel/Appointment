import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {TInput, PrimaryButton, DateInput, IconTInput} from 'atoms';
import {useFormik} from 'formik';
import {IconButton} from 'react-native-paper';
import {AppointmentSchema} from '../../../validation/appointmentSchema';
import {styles} from './Form.style';
const Form = () => {
  const [datePickerDate, setDatePickerDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      date: datePickerDate.toJSON().slice(0, 10),
      email: '',
      mobile: '',
    },
    validationSchema: AppointmentSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  useEffect(() => {
    formik.setFieldValue('date', datePickerDate.toJSON().slice(0, 10));
  }, [datePickerDate]);

  return (
    <View>
      <View style={styles.inputView}>
        <TInput
          label="First Name"
          value={formik.values.firstName}
          onChangeText={formik.handleChange('firstName')}
          error={formik.errors.firstName ? true : false}
        />
      </View>
      <View style={styles.inputView}>
        <IconTInput
          label="Date"
          value={formik.values.date}
          onChangeText={formik.handleChange('date')}
          icon="calendar-range"
          onPressIcon={() => setOpen(!open)}
        />
        <DateInput
          isOpen={open}
          date={datePickerDate}
          onConfirm={val => setDatePickerDate(val)}
          onCancel={() => setOpen(!open)}
        />
      </View>

      <View style={styles.inputView}>
        <TInput
          label="Email"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          error={formik.errors.email ? true : false}
        />
      </View>
      <View style={styles.inputView}>
        <TInput
          label="Mobile"
          value={formik.values.mobile}
          onChangeText={formik.handleChange('mobile')}
          error={formik.errors.mobile ? true : false}
        />
      </View>
      <PrimaryButton text="Make Appointment" onPress={formik.handleSubmit} />
    </View>
  );
};

export {Form};

{
  /* <View style={[styles.dateInputView, styles.inputView]}>
<TInput
  label="Date"
  value={formik.values.ddate}
  onChangeText={formik.handleChange('Date')}
  style={{flex: 1}}
/>
<IconButton
  icon="calendar-outline"
  onPress={() => setOpen(!open)}
  size={30}
  iconColor="red"
  accessibilityLabelledBy={undefined}
  accessibilityLanguage={undefined}
/>
<DateInput
  isOpen={open}
  date={datePickerDate}
  onConfirm={val => onDateConfirm(val)}
  onCancel={() => setOpen(!open)}
/>
</View> */
}
