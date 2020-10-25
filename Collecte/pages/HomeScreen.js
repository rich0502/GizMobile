// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useEffect} from 'react';
import {View, Alert, Text, SafeAreaView} from 'react-native';
import Mybutton from './componentsOffline/Mybutton';
import Mytext from './componentsOffline/Mytext';
import {openDatabase} from 'react-native-sqlite-storage';
import axios from 'axios';
import stringify from 'qs-stringify';
import Constante from '../Components/constante';
var db = openDatabase({name: 'UserDatabase.db'});

const HomeScreen = ({navigation}) => {



  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='beneficiaire'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS beneficiaire', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS beneficiaire(id_bf INTEGER PRIMARY KEY AUTOINCREMENT, nom_bf VARCHAR(70), prenom_bf VARCHAR(70), date_naiss_bf VARCHAR(70), contact_bf INT(10), adresse_bf VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

  let sync_benef = () => {
    console.log("constante.adresseIP"+Constante.adresseIP);
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM beneficiaire', [], (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i){
          axios.post(Constante.adresseIP + '/saveBenef', stringify({
            nom_bf: results.rows.item(i).nom_bf,
            
            prenom_bf: results.rows.item(i).prenom_bf,

            adresse_bf : results.rows.item(i).adresse_bf,

            contact_bf: results.rows.item(i).contact_bf,

            date_naiss_bf: results.rows.item(i).date_naiss_bf

          }))
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
          
      });
    });
    db.transaction(function (tx) {
      tx.executeSql('DROP TABLE beneficiaire');
    });
    
    Alert.alert("Synchronisation réussi");
  }


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Mytext text="Bénéficiaire" />
          <Mybutton
            title="Ajouter"
            customClick={() => navigation.navigate('Register')}
          />
          <Mybutton
            title="Modifier"
            customClick={() => navigation.navigate('Update')}
          />
          <Mybutton
            title="Recherche"
            customClick={() => navigation.navigate('View')}
          />
          <Mybutton
            title="Liste bénéficiaire"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mybutton
            title="Supprimer"
            customClick={() => navigation.navigate('Delete')}
          />
         <Mybutton title="Synchronisation en ligne" customClick={sync_benef} />

        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
