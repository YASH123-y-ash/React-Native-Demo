import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainApp from './components/MainApp';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Native App!</Text> */}
      {/* <StatusBar style="auto" /> */}
      <MainApp/>
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
