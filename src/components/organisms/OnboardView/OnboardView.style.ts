import {StyleSheet} from 'react-native';
import {DEVICE_WIDTH, DEVICE_HEIGHT} from 'shared';
const styles = StyleSheet.create({
  heroImage: {
    width: DEVICE_WIDTH / 1.5,
    height: DEVICE_HEIGHT / 2.5,
  },
  staffBtnContainer: {
    margin: 10,
  },
  patientBtnContainer: {
    margin: 10,
  },
});

export {styles};
