
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import First from './screens/First';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name='First' component={First} options={{headerShown: false}}  />
        
      </Stack.Navigator>
    </NavigationContainer>  
    </PaperProvider>
   </GestureHandlerRootView>
  );
}