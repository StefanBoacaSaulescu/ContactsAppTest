import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Contacts from 'react-native-contacts';

export default function App() {
  const [contacts, setContacts] = useState();
  useEffect(() => {
    try {
      Contacts.getAll().then((contacts) => {
        setContacts(contacts);
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
  <View style={styles.container}>
      {contacts.map(item=><Text key={item.recordID}>{`${item.familyName} ${item.givenName}`}</Text>)}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
