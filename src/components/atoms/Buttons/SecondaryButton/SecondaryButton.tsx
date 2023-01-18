import * as React from 'react';
import {Button} from 'react-native-paper';
import {IButton} from '../Button.interface';

const SecondaryButton = ({
  text,
  onPress,
  width,
  height,
}: IButton): JSX.Element => (
  <Button
    mode="outlined"
    labelStyle={{fontWeight: 'bold', fontSize: 18}}
    uppercase={true}
    style={{width: width, height: height}}
    onPress={onPress}>
    {text}
  </Button>
);

export {SecondaryButton};
