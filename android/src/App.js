import { Home, DeliveryForm } from './screens/';
import { MD3DarkTheme , adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import merge from 'deepmerge';

const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <Stack.Navigator initialRouteName='Leva Diesel'>
          <Stack.Screen name='Leva Diesel' component={Home} />
          <Stack.Screen name='Nova Entrega' component={DeliveryForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
