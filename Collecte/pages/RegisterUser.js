

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

const RegisterUser = ({navigation}) => {
  let [nom_bf, setNom_bf] = useState('');
  let [prenom_bf, setPrenom_bf] = useState('');
  let [date_naiss_bf, setDate_naiss_bf] = useState('');
  let [contact_bf, setContact_bf] = useState('');
  let [adresse_bf, setAdresse_bf] = useState('');

  let register_user = () => {
    console.log(nom_bf, prenom_bf, date_naiss_bf, contact_bf, adresse_bf);

    if (!nom_bf) {
      alert('Please fill name');
      return;
    }
    if (!prenom_bf) {
      alert('Veuillez entrer le prénom ');
      return;
    }
    if (!date_naiss_bf) {
      alert('Veuillez entrer date de naissance');
      return;
    }
    if (!contact_bf) {
      alert('Please fill Contact Number');
      return;
    }
    if (!adresse_bf) {
      alert('Please fill Address');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO beneficiaire (nom_bf, prenom_bf, date_naiss_bf, contact_bf, adresse_bf) VALUES (?,?,?,?,?)',
        [nom_bf, prenom_bf, date_naiss_bf, contact_bf, adresse_bf],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Registration Failed');
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
                placeholder="Nom"
                onChangeText={(nom_bf) => setNom_bf(nom_bf)}
                style={{padding: 10}}
              />
               <Mytextinput
                placeholder="Prénom"
                onChangeText={(prenom_bf) => setPrenom_bf(prenom_bf)}
                style={{padding: 10}}
              />
               <Mytextinput
                placeholder="Date de naissance"
                onChangeText={(date_naiss_bf) => setDate_naiss_bf(date_naiss_bf)}
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Contact"
                onChangeText={(contact_bf) => setContact_bf(contact_bf)}
                maxLength={10}
                keyboardType="numeric"
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Adresse"
                onChangeText={(adresse_bf) => setAdresse_bf(adresse_bf)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{textAlignVertical: 'top', padding: 10}}
              />
              <Mybutton title="Submit" customClick={register_user} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterUser;
