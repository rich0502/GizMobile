// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view single user

import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Mytextinput from './componentsOffline/Mytextinput';
import Mybutton from './componentsOffline/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const ViewUser = () => {
  let [id_bf, setId_bf] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(id_bf);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM beneficiaire where id_bf = ?',
        [id_bf],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('No user found');
          }
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={(id_bf) => setId_bf(id_bf)}
            style={{padding: 10}}
          />
          <Mybutton title="Search User" customClick={searchUser} />
          <View style={{marginLeft: 35, marginRight: 35, marginTop: 10}}>
            <Text>Id: {userData.id_bf}</Text>
            <Text>Nom: {userData.nom_bf}</Text>
            <Text>Prénom: {userData.prenom_bf}</Text>
            <Text>Date de naissance: {userData.date_naiss_bf}</Text>
            <Text>Contact: {userData.contact_bf}</Text>
            <Text>Adresse: {userData.adresse_bf}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;
