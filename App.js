import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const  App = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontweight: 'bold', color:'purple'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

export default App;