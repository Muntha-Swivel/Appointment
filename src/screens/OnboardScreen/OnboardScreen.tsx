import React, {useEffect} from 'react';
import {OnboardView} from 'organisms';
import {View, Text} from 'react-native';
import {commonScreenStyle} from '../screen.style';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../../redux/userSlice';

const OnboardScreen = ({navigation}: any) => {
  return (
    <View style={commonScreenStyle.container}>
      <OnboardView
        onClickStaff={() => navigation.navigate('Staff_Screen')}
        onClickPatient={() => navigation.navigate('Make_Appointment')}
      />
    </View>
  );
};
export {OnboardScreen};

// const dispatch: any = useDispatch();

// const {users, loading} = useSelector(state => state.users);
// useEffect(() => {
//   dispatch(fetchUsers());
// }, []);
// if (loading) {
//   return (
//     <View>
//       <Text>loading</Text>
//     </View>
//   );
// } else {
//   return (
//     <View>
//       {users.map(user => (
//         <Text>{user.email}</Text>
//       ))}
//     </View>
//   );
// }
