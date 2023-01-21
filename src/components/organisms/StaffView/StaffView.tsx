import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {DateInput} from 'atoms';
import {ACard, AModal} from 'molecules';
import {IStaffView} from './StaffView.interface';
import {styles} from './StaffView.style';
import {SegmentedButtons} from 'react-native-paper';
import {
  buttons,
  filterAppointments,
  confirmAppointment,
  calculateDuration as calDuration,
} from './logic';
import {IAppointment} from 'shared';
import {useDispatch} from 'react-redux';
import {getTime} from '../../../utils/getTime';

const StaffView = ({appointments}: IStaffView): JSX.Element => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>('all'); //this state holds sorting value

  const [data, setData] = useState(appointments); //this state holds all the appointements
  const [appointment, setAppointment] = useState<IAppointment>(data[0]); // this state holds a single appointment

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [datePickerDate, setDatePickerDate] = useState<Date>(new Date());
  //this states are related to date picker

  //states related to modal
  const [showModal, setShowModal] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  //these states are related to duration calculation
  const [sTime, setSTime] = useState<Date>(datePickerDate);
  const [eTime, setETime] = useState<Date>(datePickerDate);
  const [duration, setDuration] = useState<string>(''); //final duration

  const [isStartTimeSelected, setIsStartTimeSelected] = useState(true);
  //this state will store which time the user has clicked is it start time or end time this is done because I am using same date picker for both

  const setTime = (isStartTime: boolean) => {
    setIsDatePickerOpen(true);
    if (isStartTime) {
      setIsStartTimeSelected(true);
    } else {
      setIsStartTimeSelected(false);
    }
  };

  const confirmTime = (date: Date) => {
    const time = getTime(date);
    if (isStartTimeSelected) {
      setStartTime(time);
      setSTime(date);
    } else {
      setEndTime(time);
      setETime(date);
    }

    setIsDatePickerOpen(false);
  };

  const onClickConfirm = () => {
    confirmAppointment(appointment, startTime, endTime, duration, dispatch);
  };

  const calculateDuration = () => {
    const {hours, minutes} = calDuration(sTime, eTime);
    setDuration(`${hours}.${minutes}`);
  };

  useEffect(() => {
    const filteredData = filterAppointments(appointments, value);
    setData(filteredData);
    calculateDuration();
  }, [value, eTime, sTime]);

  const onClickAccept = (appointment: IAppointment) => {
    setShowModal(true);
    setAppointment(appointment);
  };
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
              time={
                item.confirmed ? item.startTime + '-' + item.endTime : 'Pending'
              }
              mobile={item.mobile}
              email={item.email}
              accept={() => onClickAccept(item)}
              duration={item.confirmed ? item.duration : '0'}
              acceptButtonDisabled={item.confirmed ? true : false}
              acceptButtonText={item.confirmed ? 'Accepted' : 'Accept'}
              decline={() => console.log('clicked decline button')}
            />
          </View>
        )}
        keyExtractor={item => item._id}
      />
      <DateInput
        isOpen={isDatePickerOpen}
        date={datePickerDate}
        mode={'time'}
        onConfirm={date => confirmTime(date)}
        onCancel={() => setIsDatePickerOpen(false)}
      />
      <AModal
        visible={showModal}
        onDismiss={() => setShowModal(false)}
        onPressStartTime={() => setTime(true)}
        onPressEndTime={() => setTime(false)}
        startTime={startTime}
        endTime={endTime}
        duration={duration.includes('-') ? 'Invlid ' : duration}
        confirmBtnDisabled={duration.includes('-') ? true : false}
        onPressConfirm={() => onClickConfirm()}
      />
    </>
  );
};

export {StaffView};
