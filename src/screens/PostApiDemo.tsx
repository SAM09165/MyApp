import { Button, StyleSheet, Text, View } from 'react-native';
export default function PostApiDemo() {
    const postData =  () => {
        const apiData = [
            {
              userId: 1,
               id: 11,
               title: 'saalim',
               body: 'saalim@example.com'
            },
                 {
              userId: 2,
               id: 20,
               title: 'vivek',
               body: 'vivek@example.com'
            },
                 {
              userId: 3,
               id: 30,
               title: 'nitin',
               body: 'nitin@example.com'
            }
        ];
    
        const arr = []
            for( var i in apiData) {
               const encodeduserId = encodeURIComponent(apiData[i].userId);
                const encodedData = encodeURIComponent(apiData[i].id);
                const encodedTitle = encodeURIComponent(apiData[i].title);
                const encodedEmail = encodeURIComponent(apiData[i].body);
                arr.push(`userId=${encodeduserId}&id=${encodedData}&title=${encodedTitle}&body=${encodedEmail}`);
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