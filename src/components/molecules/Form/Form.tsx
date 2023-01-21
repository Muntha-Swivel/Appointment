import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {TInput, PrimaryButton, DateInput, IconTInput} from 'atoms';
import {useFormik} from 'formik';
import {AppointmentSchema} from '../../../validation/appointmentSchema';
import {styles} from './Form.style';
import {useDispatch, useSelector} from 'react-redux';
import {addAppointment} from '../../../features/appointment/appointmentSlice';
import {Text} from 'react-native-paper';
const Form = () => {
  const [datePickerDate, setDatePickerDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);
  const dispatch: any = useDispatch();
  const {loading} = useSelector(state => state.appointment);

  const formik = useFormik({
    initialValues: {
      name: '',
      date: datePickerDate.toJSON().slice(0, 10),
      email: '',
      mobile: '',
    },
    validationSchema: AppointmentSchema,
    onSubmit: values => {
      console.log(values);
      dispatch(addAppointment(values));
    },
  });

  useEffect(() => {
    formik.setFieldValue('date', datePickerDate.toJSON().slice(0, 10));
  }, [datePickerDate]);

  return (
    <View>
      <View style={styles.inputView}>
        <TInput
          label="Name"
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
          error={formik.errors.name ? true : false}
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
          mode="date"
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
      {loading ? (
        <PrimaryButton
          text="Pleas Wait..."
          loading={true}
          disabled={true}
          onPress={() => console.log('error')}
        />
      ) : (
        <PrimaryButton text="Make Appointment" onPress={formik.handleSubmit} />
      )}
    </View>
  );
};

export {Form};
