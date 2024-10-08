import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/styled-input';
import StyledButton from '../components/styled-button';
import { Link, router } from 'expo-router';

export default function Login() {

    const handleLogin = () => {
        router.replace('teste')
    }

  return (
    <View style={styles.container}>
      <Text>Olá Mundo!</Text>
      <StyledInput 
      placeholder="Digite seu login" 
      onChangeText={(texto) => console.log(texto)}
      />
      <StyledButton
       color='red'
       text="entrar"
       onClick={(handleLogin)}
       />
      <StatusBar style="auto" />
      <Link href='/home'>Voltar para home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
