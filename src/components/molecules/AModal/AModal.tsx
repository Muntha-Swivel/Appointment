import * as React from 'react';
import {Modal, Portal, Button, Provider, Text} from 'react-native-paper';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from 'shared';
import {View} from 'react-native';
import {PrimaryButton} from 'atoms';
import {styles} from './AModal.style';
import {IAModal} from './AModal.interface';

const AModal = ({
  visible,
  onDismiss,
  startTime,
  endTime,
  duration,
  onPressConfirm,
  onPressStartTime,
  onPressEndTime,
  confirmBtnDisabled,
}: IAModal): JSX.Element => {
  //const [visible, setVisible] = React.useState(false);

  //   const showModal = () => setVisible(true);
  //   const hideModal = () => setVisible(false);

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={onDismiss}
          contentContainerStyle={styles.container}>
          <View style={styles.headerTitle}>
            <Text variant="headlineSmall" style={{fontWeight: 'bold'}}>
              Set Duration
            </Text>
          </View>
          <View style={styles.itemView}>
            <Button
              mode="text"
              labelStyle={styles.itemLabel}
              onPress={onPressStartTime}>
              Start Time
            </Button>
            <Text variant="bodyMedium"> {startTime}</Text>
          </View>
          <View style={styles.itemView}>
            <Button
              mode="text"
              labelStyle={styles.itemLabel}
              onPress={onPressEndTime}>
              End Time
            </Button>
            <Text variant="bodyMedium"> {endTime}</Text>
          </View>
          <View style={styles.itemView}>
            <Button mode="text" labelStyle={styles.itemLabel}>
              Total Duration
            </Button>
            <Text variant="bodyMedium"> {duration}</Text>
          </View>
          <View style={styles.buttonView}>
            <PrimaryButton
              text="Confirm"
              width={DEVICE_WIDTH / 2}
              onPress={onPressConfirm}
              disabled={confirmBtnDisabled}
            />
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export {AModal};
