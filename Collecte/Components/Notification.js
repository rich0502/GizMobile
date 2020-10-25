import React from 'react';
import HomeScreen from '../pages/HomeScreen';
import RegisterUser from '../pages/RegisterUser';
import UpdateUser from '../pages/UpdateUser';
import ViewUser from '../pages/ViewUser';
import ViewAllUser from '../pages/ViewAllUser';
import DeleteUser from '../pages/DeleteUser';

import { TouchableOpacity, Button, Text, View, Image, StyleSheet } from 'react-native';
var silverImage = require('../images/ef.png');
var menageImage = require('../images/menage.jpg');
export default function Notification({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           
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

const styles = StyleSheet.create({
    icon: {
        width:30,
        height:30
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
    }
  })