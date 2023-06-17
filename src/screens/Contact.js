import React, { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';

const ContactUs = ({ navigation }) => {
    const [userName, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [num, setNum] = React.useState('');
    const [text, setText] = React.useState('');
    const [agree, setAgree] = React.useState(false);



    const submit = () => {
        if (userName === 'Merub' && password === '123') {
            Alert.alert(`Thank You ${userName}`);
            navigation.navigate('Home', { myName: userName });
        } else {
            Alert.alert('Username and password are not correct');
        }
    };
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Level Up your Knowledge</Text>
            <Text style={styles.description}>You can reach us at anytime at merub123@gmail.com</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your name</Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={userName}
                    onChangeText={actualdata => setUsername(actualdata)
                    }
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your password</Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={actualdata => setPassword(actualdata)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter your mobile</Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={num}
                    onChangeText={actualdata => setNum(actualdata)}
                />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.labels}>How can we help you?</Text>
                <TextInput
                    style={styles.textArea}
                    multiline={true}
                    numberOfLines={4} 
                    value={text}
                    onChangeText={actualdata => setText(actualdata)}
                />
            </View>

            <View style={styles.wrapper}>
                <Checkbox value={agree} onValueChange={() => setAgree(!agree)} color={agree ? '#19647E' : 'grey'} />
                <Text style={styles.wrapperText}>I have read and agree with the T&C</Text>
            </View>
            <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: agree ? '#19647E' : 'grey' }]}
                disabled={!agree}
                onPress={submit}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ContactUs;

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    mainHeader: {
        fontSize: 25,
        color: '#344055',
        fontWeight: '500',
        paddingTop: 10,
        paddingBottom: 15,
        textTransform: 'capitalize',
        fontFamily: 'NunitoSans_600SemiBold_Italic',

    },
    description:
    {
        fontSize: 15,
        color: "#7d7d7d",
        //paddingBottom: 10,
        lineHeight: 25,
        fontFamily: "NunitoSans_400Regular_Italic"
    },

    inputContainer:
    {
        marginTop: 10,
    },
    labels:
    {
        fontSize: 16,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25

    },
    inputStyle:
    {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        // fontfamily:"regular",
        fontSize: 18
    },
    wrapper:
    {
        marginTop: 10,
        display: "flex",
        flexDirection: "row"



    },
    wrapperText:
    {
        marginLeft: 5
    },
    buttonStyle:
    {
        marginTop: 20,
        borderRadius: 8,
        height: 40
    },
    buttonText:
    {
        textAlign: "center",
        paddingTop: 5,
        fontSize: 20,
        color: "white"

    },
    textArea: {
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
        
        fontSize: 16,
        textAlignVertical: 'top',
    },

})