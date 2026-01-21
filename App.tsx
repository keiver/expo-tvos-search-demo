import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SearchScreen } from './SearchScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SearchScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
});
