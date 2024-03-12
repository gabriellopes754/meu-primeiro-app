import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.field}>nome:</Text>
      <TextInput style={styles.textinho} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(105,105,105)',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  field: {
    color:'#fff',
    fontSize: 25,
  },

  textinho: {
    backgroundColor: 'rgb(54,54,54)',
    width: 'auto',
    borderRadius:10,
    padding:10,
    marginTop:10,
  }
});
