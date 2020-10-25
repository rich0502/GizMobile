import React from 'react';
import { StyleSheet, View, Text,  FlatList, ActivityIndicator, Alert } from 'react-native'
import EditCuma from './EditCuma';
import Constante from './constante';
export default class ListCuma extends React.Component {
    constructor(props) { 
 
        super(props);
     
        this.state = {
     
          isLoading: true
     
        }
      }
     
      static navigationOptions =
      {
         title: 'ShowStudentListActivity',
      };
     
      componentDidMount() {
        
           return fetch(Constante.adresseIP + '/wsBeneficiaire')
             .then((response) => response.json())
             .then((responseJson) => {
               this.setState({
                 isLoading: false,
                 dataSource: responseJson,
               }, function() {
                 // In this block you can do something with new state.
               });
             })
             .catch((error) => {
               console.error(error);
             });
         }
        
         GetCumaIDFunction=(Id_bf,Nom_bf, Prenom_bf, Adresse_bf, Contact_bf, Date_naiss_bf)=>{
         
              this.props.navigation.navigate('EditCuma', { 
                ID : Id_bf,
                NOM : Nom_bf,
                PRENOM : Prenom_bf,
                ADRESSE : Adresse_bf,
                CONTACT : Contact_bf,
                DATE_NAISS : Date_naiss_bf
     
              });
     
         }
     
         _getBeneficiaire(Id_bf,Nom_bf, Prenom_bf, Adresse_bf, Contact_bf, Date_naiss_bf) {

            this.props.navigation.navigate('EditCuma', { 
              ID : Id_bf,
              NOM : Nom_bf,
              PRENOM : Prenom_bf,
              ADRESSE : Adresse_bf,
              CONTACT : Contact_bf,
              DATE_NAISS : Date_naiss_bf
   
            });
         }

         ListViewItemSeparator = () => {
           return (
             <View
               style={{
                 height: .5,
                 width: "100%",
                 backgroundColor: "#000",
               }}
             />
           );
         }

         render() {
          if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }
          return (
            
            <View style={styles.MainContainer_For_Show_CumaList_Activity}>
            <Text style={styles.textTitre}>Liste des bénéficiaire</Text>
            <FlatList
                data={this.state.dataSource}
                keyExtractor={(item) => item.Id_bf.toString()}
                renderItem={({item}) =>
                    
                <Text style={styles.rowViewContainer} 

                      onPress={() => this._getBeneficiaire(item.Id_bf,
                        item.Nom_bf, 
                        item.Prenom_bf, 
                        item.Adresse_bf, 
                        item.Contact_bf,
                        item.Date_naiss_bf)} > 

                      {item.Nom_bf + ' ' + item.Prenom_bf} 
                      
                      </Text>}
                />
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
      fontSize: 15,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      fontWeight: "bold",
      textDecorationLine: 'underline',
    },
    textTitre: {
        color: '#C30F08',
        fontSize: 20,
        fontWeight: "bold",
        textDecorationLine: 'underline',

    }
   
  });