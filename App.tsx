import { useEffect, useState } from 'react';
import { FlatList, PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native';
import Contacts from 'react-native-contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      }).then(
        Contacts.getAll()
          .then((contacts) => {
            setContacts(contacts);
          })
          .catch((e) => {
            console.log(e);
          })
      );
    } else {
      Contacts.getAll().then((contacts) => {
        setContacts(contacts);
      }).catch((e) => {
        console.log(e);
      });
    }
  });

  return (
    <View style={styles.container}>
      {contacts.map((item) => (
        <Text
          key={item.recordID}
        >{`${item.familyName} ${item.givenName}`}</Text>
      ))}
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
