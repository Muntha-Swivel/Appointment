import React from 'react';
import {View} from 'react-native';
import {styles} from './ACard.style';
import {useTheme} from 'react-native-paper';
import {Text} from 'react-native-paper';
import {TimeIconFill} from 'atoms';
import {PrimaryButton, SecondaryButton} from 'atoms';
import {IACard} from './ACard.interface';

const ACard = ({
  name,
  email,
  mobile,
  date,
  time,
  accept,
  decline,
  duration,
  acceptButtonDisabled,
  acceptButtonText,
}: IACard): JSX.Element => {
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
        <View style={styles.patientInfoView}>
          <View style={styles.patientInfo}>
            <Text variant="bodyMedium" style={{fontWeight: 'bold'}}>
              Name:
            </Text>
            <Text variant="bodyMedium">{name}</Text>
          </View>
          <View style={styles.patientInfo}>
            <Text variant="bodyMedium" style={{fontWeight: 'bold'}}>
              Mobile:
            </Text>
            <Text variant="bodyMedium">{mobile}</Text>
          </View>
          <View style={styles.patientInfo}>
            <Text variant="bodyMedium" style={{fontWeight: 'bold'}}>
              Email:
            </Text>
            <Text variant="bodyMedium">{email}</Text>
          </View>
          <View style={styles.patientInfo}>
            <Text variant="bodyMedium" style={{fontWeight: 'bold'}}>
              Duration:
            </Text>
            <Text variant="bodyMedium">{duration}</Text>
          </View>
        </View>
        <View style={styles.actionButtonsView}>
          <PrimaryButton
            text={acceptButtonText}
            onPress={accept}
            disabled={acceptButtonDisabled}
          />
          <SecondaryButton text="Decline" onPress={decline} />
        </View>
      </View>
    </View>
  );
};

export {ACard};
