import { View , Text, StyleSheet, Button } from 'react-native';

export default function GetApiDemo() {
    const callApi = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST' });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    const alertApi = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET' }); 
            const data = await response.json();
            alert(JSON.stringify(data));
        } catch (error) {
            console.error(error);
        }
    };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Get API Demo Screen</Text>
          
        <Button title="Fetch Data"
         onPress={callApi} 
         />
        <Button title="Alert Data"
         onPress={alertApi} 
         />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});