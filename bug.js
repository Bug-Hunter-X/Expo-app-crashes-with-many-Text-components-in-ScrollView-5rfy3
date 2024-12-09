import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>You tapped {count} times</Text>
        {/*This is a long text that may cause an issue if not handled properly. 
          It is repeated many times to exacerbate the problem. This is a long text 
          that may cause an issue if not handled properly. It is repeated many 
          times to exacerbate the problem. This is a long text that may cause an 
          issue if not handled properly. It is repeated many times to exacerbate the problem. 
          This is a long text that may cause an issue if not handled properly. It is repeated many 
          times to exacerbate the problem. This is a long text that may cause an 
          issue if not handled properly. It is repeated many times to exacerbate the problem. 
          This is a long text that may cause an issue if not handled properly. It is repeated many 
          times to exacerbate the problem. This is a long text that may cause an 
          issue if not handled properly. It is repeated many times to exacerbate the problem. */}
        {Array.from({length: 1000}).map((_, i) => (
          <Text key={i}>This is a long text that may cause an issue if not handled properly. It is repeated many times to exacerbate the problem.</Text>      
        ))}
      </ScrollView>
      <Text onPress={() => setCount(count + 1)}>Increment Count</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});