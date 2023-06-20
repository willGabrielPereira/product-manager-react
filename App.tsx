import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import api from 'src/js/api'

import Tabs from 'components/navigation';

function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App