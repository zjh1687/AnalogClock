import React from 'react';
import { Provider } from 'react-redux';
import AnalogClock from './analogClock/AnalogClock';
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <AnalogClock />
    </Provider>
  );
}

export default App;
