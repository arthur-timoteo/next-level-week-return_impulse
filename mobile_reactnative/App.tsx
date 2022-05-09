import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import { Widget } from './src/components/Widget';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      
      <Widget />

      <StatusBar 
        style="light"
        backgroundColor="transparent"
        translucent
      />

      <Text style={{ color: theme.colors.brand }}>adas dasd ad a d adas d ads dsadasdas as dsadasdas da as dasdasdasd a d ada sd </Text>
    </View>
  );
}