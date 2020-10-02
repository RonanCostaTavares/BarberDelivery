import React from 'react';
import { Button, Text } from 'react-native';
import { Container } from './styles';

import Api from '../../Api';
import { useNavigation } from '@react-navigation/native';


export default () => {


    const navigation = useNavigation();

    const handleLogoutClick = async () => {

        await Api.logout();

        navigation.reset({
            routes:[{name:'Preload'}]
        })

    }

    return (
        <Container>
            <Text>Profile</Text>
            <Button title="Sair" onPress={handleLogoutClick} />
        </Container>
    );
}



