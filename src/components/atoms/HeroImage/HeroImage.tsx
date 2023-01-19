import React from 'react';
import {Image} from 'react-native';
import {styles} from './HeroImage.style';
import {IHeroImage} from './HeroImage.interface';
const HeroImage = ({image, style}: IHeroImage): JSX.Element => {
  return <Image source={image} style={style} />;
};
export {HeroImage};
