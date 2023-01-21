import {StyleSheet} from 'react-native';
import {DEVICE_WIDTH, DEVICE_HEIGHT} from 'shared';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    height: DEVICE_HEIGHT / 4,
    width: DEVICE_WIDTH - 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20,
  },
  headerTitle: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  itemLabel: {
    fontSize: 15,
  },
});
export {styles};
