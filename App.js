import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigators/Navigation';
import Toast from 'react-native-toast-message';
import {Provider as PaperProvider} from 'react-native-paper';
import colors from './src/utils/colors';

const App: () => React$Node = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.colorBlue}
        />
        <NavigationContainer
          ref={navigationRef}
          onReady={() =>
            (routeNameRef.current =
              navigationRef.current.getCurrentRoute().name)
          }
          onStateChange={() => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName =
              navigationRef.current.getCurrentRoute().name;

            if (previousRouteName !== currentRouteName) {
              global.currentRoute = currentRouteName;
            }

            routeNameRef.current = currentRouteName;
          }}>
          <RootStack />
        </NavigationContainer>
        <Toast ref={ref => Toast.setRef(ref)} />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
