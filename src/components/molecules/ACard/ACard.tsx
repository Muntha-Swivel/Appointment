import * as React from 'react';
import {View} from 'react-native';
import {styles} from './ACard.style';
import {useTheme} from 'react-native-paper';
import {Text} from 'react-native-paper';
import {TimeIconFill} from 'atoms';
import {Avatar} from 'react-native-paper';
import {PrimaryButton, SecondaryButton} from 'atoms';
import {IACard} from './ACard.interface';

//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const name = 'Munthasir';
const ACard = ({name, date, time, accept, decline}: IACard): JSX.Element => {
  const theme = useTheme();
  return (
    <View style={styles.mainView}>
      <View
        style={[styles.headerView, {backgroundColor: theme.colors.primary}]}>
        <Text variant="titleSmall" style={styles.titleText}>
          Appointment Request
        </Text>
        <View style={styles.dateTimeView}>
          <TimeIconFill />
          <Text variant="titleLarge" style={styles.dateTimeText}>
            {date}, {time}
          </Text>
        </View>
      </View>
      <View style={styles.bodyView}>
        <View style={styles.profileDetailsView}>
          <Text variant="bodyLarge" style={{fontWeight: 'bold'}}>
            Name:
          </Text>
          <Text variant="bodyLarge">{name}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <PrimaryButton text="Accept" onPress={accept} />
          <SecondaryButton text="Decline" onPress={decline} />
        </View>
      </View>
    </View>
  );
};

export {ACard};
