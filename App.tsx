import React from 'react';
import {TamaguiProvider} from 'tamagui';
import 'react-native-gesture-handler';

import config from './tamagui.config';
import {MoodTrackerScreen} from './src/screen';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <MoodTrackerScreen />
    </TamaguiProvider>
  );
}
