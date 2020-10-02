import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


import Stars from './Stars';

const Area = styled.TouchableOpacity`
    backgroundColor: #FFF;
    marginBottom: 20px;
    borderRadius: 20px;
    padding: 15px;
    flexDirection: row;
`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    borderRadius: 20px;
`;

const InfoArea =  styled.View`
    marginLeft: 20px;
    justifyContent: space-between;
`;

const UserName = styled.Text`
    fontSize: 17px; 
    fontWeight: bold; 
`;

const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid #4EADBE;
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
`;

const SeeProfileButtonText = styled.Text`
    fontSize: 13px;
    color: #268596;
`;

export default ({data}) => {

    const navigation = useNavigation();


    const hanldeClick = () => {
        navigation.navigate('Barber', {
            id: data.id,
            avatar: data.avatar,
            name: data.name,
            stars: data.stars

        });
    }

    return (
        <Area onPress={hanldeClick}>
            <Avatar source={{url: data.avatar}}/>
            <InfoArea>
                <UserName>{data.name}</UserName>

                <Stars stars={data.stars} showNumber={true}/>

                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>

        </Area>
    );
}