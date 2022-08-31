import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriaTab from './src/tabs/CategoriaTab';
import ProdutoTab from './src/tabs/ProdutoTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 15
          },
          tabBarIconStyle: { display: "none" },
        }}
      >
        <Tab.Screen name="Categorias" component={CategoriaTab} />
        <Tab.Screen name="Produtos" component={ProdutoTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
