import React from 'react';
// import RNBootSplash from 'react-native-bootsplash';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import Router from './src/router/router';
// import store from './src/redux/store';
import {View,Text} from 'react-native'

export default function App() {

  // React.useEffect(() => {
  //   RNBootSplash.show({});
  // }, []);
  return (
    <View>
      <Text>hello world</Text>
    </View>
  
  );
}


//   <Provider store={store().store}>
  //   <PersistGate loading={null} persistor={store().persistor}>
  //     <Router />
  //   </PersistGate>
  // </Provider>