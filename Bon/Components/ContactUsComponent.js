import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';


class ContactUs extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    };
    render() {
        return (
                                       
            <View style={styles.TextContainer}>
                <Image
                  
                    source={require('./images/pic.png')}
                />
                <Text style={styles.myTextstyle}> We are located at:</Text>
                <Text style={styles.myTextstyle}>4800 Calhoun Rd, Houston, TX 77004</Text>
                <Text style={styles.myTextstyle}>Call us at:</Text>
                <Text style={styles.myTextstyle}>(713)679-3474</Text>
                <Text>Our Business Hours:</Text>
                <Text>Monday-Saturday 11AM to 10:30PM</Text>
                <Text>Sundays 11AM to 9PM</Text>
            </View>
            );
        }

}

const styles = StyleSheet.create({
    myTextstyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14
    },

    TextContainer: {
        flex: 1,
        backgroundColor: '#ffc1ed',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#f73df4',
        borderWidth: 15

    }

});


export default ContactUs;