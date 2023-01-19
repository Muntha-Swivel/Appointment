import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {ACard} from 'molecules';
import {IStaffView} from './StaffView.interface';
import {styles} from './StaffView.style';
import {SegmentedButtons} from 'react-native-paper';
import {buttons, filterAppointments} from './logic';

const StaffView = ({appointments}: IStaffView): JSX.Element => {
  const [value, setValue] = useState('all');
  const [data, setData] = useState(appointments);

  useEffect(() => {
    const filteredData = filterAppointments(appointments, value);
    setData(filteredData);
  }, [value]);

  return (
    <>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={buttons}
        style={styles.segmentButtons}
      />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.aCardView}>
            <ACard
              name={item.name}
              date={item.date}
              time={item.confirmed ? 'Confirmed' : 'Pending'}
            />
          </View>
        )}
        keyExtractor={item => item._id}
      />
    </>
  );
};

export {StaffView};
