import React, { useContext, useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user,setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    function confirmUserDeletion(user) {
        Alert.alert('Delete user ' + route.params.name + ' ?', '', [
            {
                text: 'Yes',
                onPress() {
                    dispatch({
                        // passing the action to /reducer
                        type: 'deleteUser',
                        // passing the information you want act upon
                        payload: user,
                    })
                 navigation.goBack()
                }
            },
            {
                text: "No"
            }
        ])
    }

    return (
        <View style={styles.form}>
            <Text>Name</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={name => setUser({...user, name})}
                placeholder="Insert User Name"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={email => setUser({...user, email})}
                placeholder="Insert User Name"
                value={user.email}
            />
            <Text>Avatar Url</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Insert User Name"
                value={user.avatarUrl}
            />
            <Separator />
            <Button
                title="Save"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
            <Separator />
            <Button
                style={styles.deletebutton}
                color='#ff3838'
                title="Delete"
                size='medium'
                onPress={() => confirmUserDeletion(user)}
            />
        </View>
    )
}

const Separator = () => (
    <View style={styles.separator} />
  );

const styles  = StyleSheet.create({
    form: {
        padding:12,
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    deletebutton:{
        paddingTop:5,
        marginTop:10,
    },
    separator: {
        marginVertical: 8,
      },
    
})