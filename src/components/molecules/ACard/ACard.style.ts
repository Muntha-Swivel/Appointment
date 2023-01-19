import {StyleSheet} from 'react-native';
import {DEVICE_WIDTH, DEVICE_HEIGHT} from 'shared';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: DEVICE_HEIGHT / 4,
    width: DEVICE_WIDTH - 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerView: {
    backgroundColor: 'blue',
    flex: 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    justifyContent: 'center',
  },
  dateTimeText: {
    color: 'white',
    marginLeft: 10,
  },
  dateTimeView: {
    flexDirection: 'row',
  },
  titleText: {
    color: '#B5B5B5',
    margin: 5,
  },
  bodyView: {
    backgroundColor: 'white',
    flex: 4,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
  },
  profileDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});

export {styles};
