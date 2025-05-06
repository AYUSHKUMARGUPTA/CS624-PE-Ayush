import { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage} source={require('../../assets/images/user.png')} />
                    </View>
                    <View style={styles.cardContentContainer}>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.jobTitle}>React Native Developer</Text>
                        <Text style={styles.jobDescription}>John is a really great Javascript Developer. He love using JS to build React Native applications for iOS and Android.</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    cardContainer: {
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        alignItems: 'center',
    },
    cardContentContainer: {
        marginTop: 5,
        alignItems: 'center',
    },
    cardImageContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 80,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    jobTitle: {
        color: 'black',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    jobDescription: {

    }
})