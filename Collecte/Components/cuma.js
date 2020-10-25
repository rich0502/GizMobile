import React from 'react';
import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native'
import ListCuma from './ListCuma';
import Constante from './constante';
import axios from 'axios';
import stringify from 'qs-stringify';
export default class Cuma extends React.Component {
    
  constructor(props) {

    super(props)

    this.state = {
 
      TextInput_nom: '',
      TextInput_prenom: '',
      TextInput_adresse: '',
      TextInput_contact: '',
      TextInput_date_naiss: '',
 
    }
   
    }

  _insertBeneficiaire = () => {
    axios.post(Constante.adresseIP + '/saveBenef', stringify({
      nom_bf: this.state.TextInput_nom,
      
      prenom_bf: this.state.TextInput_prenom,

      adresse_bf : this.state.TextInput_adresse,

      contact_bf: this.state.TextInput_contact,

      date_naiss_bf: this.state.TextInput_date_naiss

    }))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.navigation.navigate('Liste Bénéficiaire');
  }

  GoTo_Show_CumaList_Activity_Function = () =>
  {
    this.props.navigation.navigate('Liste Bénéficiaire');
    
  }

  render() {
    return (
 
 <View style={styles.MainContainer}>
 
 
        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Ajout bénéficiaire </Text>
  
        <TextInput
          
          placeholder="Nom"
 
          onChangeText={ TextInputValue => this.setState({ TextInput_nom : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
       <TextInput
          
          placeholder="Prénom"
 
          onChangeText={ TextInputValue => this.setState({ TextInput_prenom : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
       <TextInput
          
          placeholder="Adresse"
 
          onChangeText={ TextInputValue => this.setState({ TextInput_adresse : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
 
          placeholder="Contact"
 
          onChangeText={ TextInputValue => this.setState({ TextInput_contact : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput

          placeholder="Date de naissance"

          onChangeText={ TextInputValue => this.setState({ TextInput_date_naiss : TextInputValue }) }

          underlineColorAndroid='transparent'

          style={styles.TextInputStyleClass}
        />
  
       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this._insertBeneficiaire} >
 
         <Text style={styles.TextStyle}> Enregistrer </Text>
 
       </TouchableOpacity>
 
       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_CumaList_Activity_Function} >
 
         <Text style={styles.TextStyle}> Liste bénéficiaire </Text>
 
       </TouchableOpacity>
       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={() => this.props.navigation.navigate('Accueil')} >
 
         <Text style={styles.TextStyle}> Accueil </Text>
 
       </TouchableOpacity>
  
 
 </View>
            
    );
  }

  }

  const styles = StyleSheet.create({
 
    MainContainer :{
   
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#fff'
   
    },
   
    MainContainer_For_Show_StudentList_Activity :{
      
      flex:1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0,
      marginLeft: 5,
      marginRight: 5
      
      },
   
    TextInputStyleClass: {
   
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5 ,
   
    },
   
    TouchableOpacityStyle: {
   
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#B55F4C'
   
    },
   
    TextStyle:{
      color:'#fff',
      textAlign:'center',
    },
   
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    }
   
  });