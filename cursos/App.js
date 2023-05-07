import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriaScreen from './source/screens/CategoriaScreen';
import CursoScreen from './source/screens/CursoScreen.js';
import CursoDetalheScreen from './source/screens/CursoDetalheScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriaScreeen"
          component={CategoriaScreen}
          options={{ title: 'Cursos - SENAI' }}
        />
        <Stack.Screen
          name="CursoScreen"
          component={CursoScreen}
          options={{ title: 'Cursos Disponíveis' }}
        />
        <Stack.Screen
          name="CursoDetalhe"
          component={CursoDetalheScreen}
          options={{ title: 'Sobre o curso' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}