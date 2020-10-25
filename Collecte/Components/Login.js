import React, { Component } from 'react';
import { StyleSheet,Image , TextInput, View, Alert, Button, Text} from 'react-native';
import constante from './constante';
var silverImage = require('../images/ef.png');
var menageImage = require('../images/vanilla.png');

export default class Login extends React.Component {
  static navigationOptions = { // remove header on this page
    header: null
}
    constructor(props) {
 
        super(props)
     
        this.state = {
     
          UserEmail: '',
          UserPassword: ''
     
        }
     
      }

     UserLoginFunction = () =>{
        const { UserEmail }  = this.state ;
        const { UserPassword }  = this.state ;
       fetch(constante.adresseIP + '/loginUser?email='+ UserEmail +'&password='+ UserPassword, {
         method: 'GET'
        
       }).then((response) => response.json())
             .then((responseJson) => {
                   //Then open Profile activity and send user email to profile activity.
                   this.props.navigation.navigate('Menu', { Email: responseJson[0].Email});      
       
             }).catch((error) => {
               console.error(error);
             });
        
         }
         render(){
    return (

<View style={styles.MainContainer}>
            <View style={{ flex: 3}}>
                <Image source={silverImage} style={styles.image} />
                <Image source={menageImage} style={styles.menage} />
                <Text style={styles.textHome}>CONNEXION</Text>
            </View>
            <View style={{ flex: 2}}>
              <TextInput
                // Adding hint in Text Input using Place holder.
                placeholder="Enter User Email"

                onChangeText={UserEmail => this.setState({UserEmail})}

                // Making the Under line Transparent.
                underlineColorAndroid='transparent'

                style={styles.TextInputStyleClass}
              />

              <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Enter User Password"

              onChangeText={UserPassword => this.setState({UserPassword})}

              // Making the Under line Transparent.
              underlineColorAndroid='transparent'

              style={styles.TextInputStyleClass}

              secureTextEntry={true}
              />

              <Button title="SE CONNECTER" onPress={this.UserLoginFunction} color="#B55F4C" />
            </View>
      </View>

      
    );
    }
}

const styles = StyleSheet.create({
 
    MainContainer :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10,
    },
     
    TextInputStyleClass: {
     
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#C30F08',
     
     // Set border Radius.
     borderRadius: 5 ,
     
    },
     
     TextComponentStyle: {
       fontSize: 20,
      color: "#000",
      textAlign: 'center', 
      marginBottom: 15
     },
     image: {
      width:400,
      height:60
    },
    image: {
     width:400,
     height:60
   },
   menage : {
       width:400,
       height:270
   },
   textHome: {
       color: '#C30F08',
       fontSize: 20,
       fontWeight: "bold",
       textAlign: 'center',

   }
    });
