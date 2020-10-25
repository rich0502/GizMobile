import React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
var silverImage = require('../images/ef.png');
var menageImage = require('../images/vanilla.png');
export default function Home({ navigation }) {
    return (
        <View style={styles.main_container}>
             <View style={{ flex: 2}}>
                <Image source={silverImage} style={styles.image} />
                <Text style={styles.textHome}>Accueil</Text>
                <Image source={menageImage} style={styles.menage} />
            </View>
            <View style={{ flex: 1}}>
                <Text>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Integer molestie nunc enim, 
                    aliquam libero, amet gravida nisi. Mattis nisl 
                    consequat lectus in urna tincidunt congue. Semper 
                    volutpat sed dolor in aenean cras tellus pulvinar 
                    vitae. Phasellus posuere facilisi nunc purus in arcu 
                    tincidunt commodo. Sit felis amet in viverra hac velit.
                    Congue mollis porta ullamcorper et fusce pellentesque 
                    non.</Text>
                
            </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 5
      },container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
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
        textDecorationLine: 'underline',

    }
  });