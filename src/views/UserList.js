import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import users from '../data/users'
import { Icon, ListItem, Button } from 'react-native-elements'

export default props => {
    console.warn(Object.keys(props))
    function confirmUserDeletion(user){
        Alert.alert('Delete user '+ user.name + ' ?','', [
            {
                text: 'Yes',
                onPress() {
                    console.warn('deleted')
                }
            },
            {
                text: "No"
            }
        ])
    }

    function getActions(user){
        return(
            <>
                <Button
                    onPress={() =>props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange"/>}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red"/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm')}
            />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}