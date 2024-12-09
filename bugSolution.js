import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const Item = React.memo(({ item }) => (
  <Text>{item}</Text>
));

export default function App() {
  const [count, setCount] = React.useState(0);
  const data = Array.from({length: 1000}).map((_, i) => (
    `This is a long text that may cause an issue if not handled properly. It is repeated many times to exacerbate the problem. ${i}`
  ));
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item, index) => index}
      />
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