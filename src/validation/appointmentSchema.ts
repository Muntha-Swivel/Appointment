import * as yup from 'yup';

const onlyAlphabetsRegex = /^[A-Za-z]+$/;
const phoneNumberRegex =
  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

const AppointmentSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is Required')
    .min(6, 'Should have minimum 6 characters')
    .max(10, 'Maximum number of characters is 10')
    .matches(onlyAlphabetsRegex, 'Should be only alphabets'),
  date: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format. Use yyyy-mm-dd'),
  email: yup.string().email().required('Email is Required'),
  mobile: yup
    .string()
    .required('Please Provide  a Phone Number')
    .matches(phoneNumberRegex, 'Please enter a valid phone number'),
});

export {AppointmentSchema};
