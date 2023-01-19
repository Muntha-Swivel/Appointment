import React from 'react';
import {PrimaryButton, SecondaryButton, HeroImage} from 'atoms';
import {View} from 'react-native';
import {styles} from './OnboardView.style';
import {IOnboard} from './OnboardView.interface';
import images from '../../../assets/images';
const OnboardView = ({onClickPatient, onClickStaff}: IOnboard) => {
  return (
    <>
      <View>
        <HeroImage image={images['doctor']} style={styles.heroImage} />
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
