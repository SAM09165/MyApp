import { Button, StyleSheet, Text, View } from 'react-native';
export default function PostApiDemo() {
    const postData =  () => {
        const apiData = [
            {
               id: 1,
               name: 'saalim',
               email: 'saalim@example.com'
            },
                 {
               id: 2,
               name: 'vivek',
               email: 'vivek@example.com'
            },
                 {
               id: 3,
               name: 'nitin',
               email: 'nitin@example.com'
            }
        ];
    
        const arr = []
            for( var i in apiData) {
                const encodedData = encodeURIComponent(apiData[i].id);
                const encodedName = encodeURIComponent(apiData[i].name);
                const encodedEmail = encodeURIComponent(apiData[i].email);
                arr.push(`id=${encodedData}&name=${encodedName}&email=${encodedEmail}`);
            }
            arr.join('&');
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: arr.join('&'),
            })
        };

  return (
    <View style={styles.container}>
      <Text>Post API Demo Screen</Text>
        <Button title="Fetch Data"
         onPress={postData} 
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
    fontSize: 16,
    textAlign: 'center',
  },
  Button: {
    marginTop: 20,
    color: 'blue',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});