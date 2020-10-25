import React from 'react';
import { StyleSheet, View, Alert, TextInput,  Text,  TouchableOpacity } from 'react-native';
import axios from 'axios';
import stringify from 'qs-stringify';
import Constante from './constante';
export default class EditCuma extends React.Component {
    constructor(props) {
    
        super(props)
     
        this.state = {
  
          TextInput_ID: '',
          TextInput_nom: '',
          TextInput_prenom: '',
          TextInput_adresse: '',
          TextInput_contact: '',
          TextInput_date_naiss: ''
     
        }
     
      }
  
      componentDidMount(){
        //Alert.alert(this.props.route.params.DATE_NAISS);
       // Received  Details Sent From Previous Activity and Set Into State.
       this.setState({ 
        TextInput_ID : this.props.route.params.ID,
        TextInput_nom: this.props.route.params.NOM,
        TextInput_prenom: this.props.route.params.PRENOM,
        TextInput_adresse: this.props.route.params.ADRESSE,
        TextInput_contact: this.props.route.params.CONTACT,
        TextInput_date_naiss: this.props.route.params.DATE_NAISS,
       })
  
      }
   
     static navigationOptions =
     {
        title: 'EditCuma',
     };
  
     UpdateCumaRecord = () =>{
       
             fetch(Constante.adresseIP + '/saveEditBenef', {
             method: 'POST',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({
       
                id_bf : this.state.TextInput_ID,
  
                nom_bf : this.state.TextInput_nom,
       
                prenom_bf : this.state.TextInput_prenom,
       
                adresse_bf : this.state.TextInput_adresse,
       
                contact_bf: this.state.TextInput_contact,

                date_naiss_bf: this.state.TextInput_date_naiss
       
             })
       
             }).then((response) => response.json())
                 .then((responseJson) => {
       
                   // Showing response message coming from server updating records.
                   Alert.alert(responseJson);
       
                 }).catch((error) => {
                   console.error(error);
                 });
       
                 
       }
  
  
       _updateBeneficiaire = () => {
        axios.post( Constante.adresseIP +  '/saveEditBenef', stringify({

          id_bf : this.state.TextInput_ID,

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

      _deleteBeneficiaire = () => {
        axios.post(Constante.adresseIP + '/deleteBenef', stringify({

          id_bf : this.state.TextInput_ID
    
        }))
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.props.navigation.navigate('Liste Bénéficiaire');
      }

      _accueil = () => {
        this.props.navigation.navigate('Accueil');
      }

     render() {
  
       return (
    
    <View style={styles.MainContainer}>
    
           <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Modifier bénéficiaire </Text>
     
           <TextInput
             
             placeholder="Nom Shows Here"
             
             value={this.state.TextInput_nom}
    
             onChangeText={ TextInputValue => this.setState({ TextInput_nom : TextInputValue }) }
    
             underlineColorAndroid='transparent'
    
             style={styles.TextInputStyleClass}
           />
    
          <TextInput
             
             placeholder="Prenom Shows Here"
  
             value={this.state.TextInput_prenom}
    
             onChangeText={ TextInputValue => this.setState({ TextInput_prenom : TextInputValue }) }
    
             underlineColorAndroid='transparent'
    
             style={styles.TextInputStyleClass}
           />
    
          <TextInput
             
             placeholder="adresse Shows Here"
  
             value={this.state.TextInput_adresse}
    
             onChangeText={ TextInputValue => this.setState({ TextInput_adresse : TextInputValue }) }
    
             underlineColorAndroid='transparent'
    
             style={styles.TextInputStyleClass}
           />
    
           <TextInput
    
             placeholder="contact Shows Here"
  
             value={this.state.TextInput_contact}
    
             onChangeText={ TextInputValue => this.setState({ TextInput_contact: TextInputValue }) }
    
             underlineColorAndroid='transparent'
    
             style={styles.TextInputStyleClass}
           />

          <TextInput
              
              placeholder="date de naissance"

              value={this.state.TextInput_date_naiss}

              onChangeText={ TextInputValue => this.setState({ TextInput_date_naiss: TextInputValue }) }

              underlineColorAndroid='transparent'

              style={styles.TextInputStyleClass}
            />
    
          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this._updateBeneficiaire} >
    
             <Text style={styles.TextStyle}> Modifier </Text>
    
          </TouchableOpacity>
    
          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this._deleteBeneficiaire} >
    
             <Text style={styles.TextStyle}> Supprimer</Text>
    
          </TouchableOpacity>

          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this._accueil} >
    
             <Text style={styles.TextStyle}> Accueil</Text>
    
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
      backgroundColor: '#00BCD4'
   
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