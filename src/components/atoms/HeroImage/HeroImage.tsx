import React from 'react';
import {Image} from 'react-native';
import {styles} from './HeroImage.style';
const HeroImage = (): JSX.Element => {
  return (
    <Image
      source={require('../../../assets/images/doc.png')}
      style={styles.image}
    />
  );
};
export {HeroImage};
