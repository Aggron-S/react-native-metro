import React, {useState} from "react";
import {COLORS, FONT, SIZES, SHADOWS} from './constants/index'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  Button,
} from 'react-native';

// const add = (statesetState) => {
//   setState()
// }
const Home = ({name, address}) => {
  // Initial Counter State
  const [color, setColor] = useState("red");
  // add(counter, setCounter)
  const home = (
    <View style={{flex: 5, backgroundColor: COLORS.gray2}}>
      <Text >Name: {`${color}`} </Text>
      <Text >Address: {address} </Text>
      <TextInput></TextInput>

      <Button
        onPress={() => setColor("blue")}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Image
          source={{
            uri: `https://reactnative.dev/docs/assets/p_cat2.png`,
          }}
          style={{width: 200, height: 200}}
        />
      <Image
          source={{
            uri: `https://reactnative.dev/docs/assets/p_cat2.png`,
          }}
          style={{width: 200, height: 200}}
        />
    </View>
  );
  return home;
}

export default function App(){
  return <Home name="Test Name" address="Test City"/>
};
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });