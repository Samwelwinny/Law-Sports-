```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/AuthContext';
import { NotificationProvider } from './src/contexts/NotificationContext';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CasesScreen from './src/screens/CasesScreen';
import CaseDetailScreen from './src/screens/CaseDetailScreen';
import DocumentsScreen from './src/screens/DocumentsScreen';
import VideoScreen from './src/screens/VideoScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ScanDocumentScreen from './src/screens/ScanDocumentScreen';
import EmergencyContactScreen from './src/screens/EmergencyContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NotificationProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{
                headerStyle: { backgroundColor: '#1a237e' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
              }}
            >
              <Stack.Screen 
                name="Splash" 
                component={SplashScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ title: 'ProLegis Dashboard 🛡️' }}
              />
              <Stack.Screen 
                name="Cases" 
                component={CasesScreen}
                options={{ title: 'My Cases ⚖️' }}
              />
              <Stack.Screen 
                name="CaseDetail" 
                component={CaseDetailScreen}
                options={{ title: 'Case Details' }}
              />
              <Stack.Screen 
                name="Documents" 
                component={DocumentsScreen}
                options={{ title: 'Documents 📄' }}
              />
              <Stack.Screen 
                name="Video" 
                component={VideoScreen}
                options={{ title: 'Video Consultations 🎥' }}
              />
              <Stack.Screen 
                name="Notifications" 
                component={NotificationsScreen}
                options={{ title: 'Notifications 🔔' }}
              />
              <Stack.Screen 
                name="ScanDocument" 
                component={ScanDocumentScreen}
                options={{ title: 'Scan Document' }}
              />
              <Stack.Screen 
                name="Emergency" 
                component={EmergencyContactScreen}
                options={{ title: 'Emergency Contact' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NotificationProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}