import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import UsersContext from '../context/UsersContext'


export default props => {
/*
* Context Api will wrap the application that share common data (users) 
*/
const { state } = useContext(UsersContext)
keyExtractor = (index) => index.toString()

getUserItem = ({ item }) => (
    <ListItem
        key={item.id}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm', item)}
    >
        <Avatar
            rounded
            size="large"
            source={{ uri: item.avatarUrl }} />
        <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
    </ListItem>
)

    return (
        <FlatList
            keyExtractor={user => user.id.toString()}
            data={state.users}
            renderItem={this.getUserItem}
        />
    )
}