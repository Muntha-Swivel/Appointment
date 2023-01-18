import React from 'react';
import {PrimaryButton, SecondaryButton, HeroImage} from 'atoms';
import {View} from 'react-native';
import {styles} from './OnboardView.style';
import {IOnboard} from './OnboardView.interface';

const OnboardView = ({onClickPatient, onClickStaff}: IOnboard) => {
  return (
    <>
      <View>
        <HeroImage />
      </View>
      <View style={styles.staffBtnContainer}>
        <PrimaryButton text="Continue as Staff" onPress={onClickStaff} />
      </View>
      <View style={styles.patientBtnContainer}>
        <SecondaryButton text="Continue as Patient" onPress={onClickPatient} />
      </View>
    </>
  );
};

export {OnboardView};
