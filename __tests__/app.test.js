import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {ACard} from '../src/components/molecules/ACard/ACard';

describe('Testing appointment card', () => {
  it('should render properly', () => {
    const tree = renderer
      .create(
        <ACard
          date="2023-04-01"
          time="12:5"
          name="Jason"
          mobile="0779122134"
          email="jason@gmail.com"
          accept={() => console.log('accept')}
          decline={() => console.log('decline')}
          acceptButtonText={'Tsting'}
          acceptButtonDisabled={false}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
