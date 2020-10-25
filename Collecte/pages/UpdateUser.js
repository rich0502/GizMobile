// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to update the user

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './componentsOffline/Mytextinput';
import Mybutton from './componentsOffline/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const UpdateUser = ({navigation}) => {
  let [id_bf, setId_bf] = useState('');
  let [nom_bf, setNom_bf] = useState('');
  let [prenom_bf, setPrenom_bf] = useState('');
  let [date_naiss_bf, setDate_naiss_bf] = useState('');
  let [contact_bf, setContact_bf] = useState('');
  let [adresse_bf, setAdresse_bf] = useState('');


  let updateAllStates = (nom_bf, prenom_bf, date_naiss_bf,  contact_bf, adresse_bf) => {
    setNom_bf(nom_bf);
    setPrenom_bf(prenom_bf);
    setDate_naiss_bf(date_naiss_bf);
    setContact_bf(contact_bf);
    setAdresse_bf(adresse_bf);
  };

  let searchUser = () => {
    console.log(id_bf);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM beneficiaire where id_bf = ?',
        [id_bf],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(res.nom_bf, res.prenom_bf, res.date_naiss_bf, res.contact_bf, res.adresse_bf);
          } else {
            alert('No user found');
            updateAllStates('', '', '');
          }
        },
      );
    });
  };
  let updateUser = () => {
    console.log(id_bf, nom_bf, prenom_bf, date_naiss_bf,  contact_bf, adresse_bf);

    if (!id_bf) {
      alert('Identifiant');
      return;
    }
    if (!nom_bf) {
      alert('Nom bénéficiaire');
      return;
    }
    if (!prenom_bf) {
      alert('Prénom bénéficiaire');
      return;
    }
    if (!date_naiss_bf) {
      alert('Date de naissance');
      return;
    }
    if (!contact_bf) {
      alert('Contact');
      return;
    }
    if (!adresse_bf) {
      alert('Adresse bénéficiaire');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE beneficiaire set nom_bf=?, prenom_bf=? , date_naiss_bf=?, contact_bf=?, adresse_bf=? where id_bf=?',
        [nom_bf, prenom_bf, date_naiss_bf,  contact_bf, adresse_bf,id_bf],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Updation Failed');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Mytextinput
                placeholder="Identifiant"
                style={{padding: 10}}
                onChangeText={(id_bf) => setId_bf(id_bf)}
              />
              <Mybutton title="Recherche bénéficiaire" customClick={searchUser} />
              <Mytextinput
                placeholder="Nom"
                value={nom_bf}
                style={{padding: 10}}
                onChangeText={(nom_bf) => setNom_bf(nom_bf)}
              />
               <Mytextinput
                placeholder="Prénom"
                value={prenom_bf}
                style={{padding: 10}}
                onChangeText={(prenom_bf) => setPrenom_bf(prenom_bf)}
              />
               <Mytextinput
                placeholder="Date de naissance"
                value={date_naiss_bf}
                style={{padding: 10}}
                onChangeText={(date_naiss_bf) => setDate_naiss_bf(date_naiss_bf)}
              />
              <Mytextinput
                placeholder="Contact"
                value={'' + contact_bf}
                onChangeText={(contact_bf) => setContact_bf(contact_bf)}
                maxLength={10}
                style={{padding: 10}}
                keyboardType="numeric"
              />
              <Mytextinput
                value={adresse_bf}
                placeholder="Addresse"
                onChangeText={(adresse_bf) => setAdresse_bf(adresse_bf)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{textAlignVertical: 'top', padding: 10}}
              />
              <Mybutton title="Modifier" customClick={updateUser} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;
