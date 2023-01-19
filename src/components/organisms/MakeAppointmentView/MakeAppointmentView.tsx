import React from 'react';
import {HeroImage} from 'atoms';
import {Form} from 'molecules';
import images from '../../../assets/images';
import {styles} from './MakeAppointmentView.style';

const MakeAppointmentView = (): JSX.Element => {
  return (
    <>
      <HeroImage image={images['appointment']} style={styles.heroImage} />
      <Form />
    </>
  );
};

export {MakeAppointmentView};
