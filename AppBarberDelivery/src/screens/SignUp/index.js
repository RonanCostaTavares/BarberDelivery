import React, { useState } from 'react';
import { 
    Container, 
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold

} from './styles'

import SignInput from '../../components/SignInput'
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';



export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '' && nameField != ''){

            let json = await Api.singUp(emailField, passwordField, nameField);
            if(json.token){
                alert('Deu certo')

            }else {
                alert('E-mail e/ou senha errados')
            }

        }else {
            alert("Preencha os campos!")
        }
    }


    const handleMessageButtonClick = () => {

        navigation.reset({
            routes:[{name: 'SignIn'}]
        });
    }

    return (
        <Container>

            <BarberLogo width="100%" height="160"/>

            <InputArea>
                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}

                />

                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />
                
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>Ja possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
            
        </Container>
    );
}