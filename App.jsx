import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';
import {
  Colors,
  // DebugInstructions,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// dev defined modules
import {COLORS, SHADOWS} from './src/constants/index';
import Home from './src/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,};

  const page = (
    // JSX Entry Point
    <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.tertiary}}>
      <ScrollView>
        <Home/>
        <Home/>
        <Home/>
      </ScrollView>
    </SafeAreaView>
  );
  return page;
};

export default App;
