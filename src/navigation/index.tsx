import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

enableScreens();

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={({ navigation }: { navigation: HomeScreenNavigationProp }) => ({
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Settings')}
                style={{ marginRight: 15 }}
              >
                <Text style={{ color: '#007AFF' }}>Settings</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            title: 'Settings',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation; 