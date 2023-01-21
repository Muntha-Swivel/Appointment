/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {ACard} from '../src/components/molecules';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Testing the Appointment list card', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ACard
          name="Leon"
          email="leaon@gmail.com"
          mobile="+94779122185"
          date="2020-01-03"
          accept={() => console.log('accept')}
          decline={() => console.log('decline')}
          acceptButtonText="Accept"
          acceptButtonDisabled={false}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
