import * as React from 'react';
import {Button} from 'react-native-paper';
import {IButton} from '../Button.interface';

const PrimaryButton = ({
  text,
  onPress,
  width,
  height,
}: IButton): JSX.Element => (
  <Button
    mode="contained"
    onPress={onPress}
    labelStyle={{fontWeight: 'bold', fontSize: 18}}
    uppercase={true}
    style={{width: width, height: height}}>
    {text}
  </Button>
);

export {PrimaryButton};
