import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    backgroundColor: #63C2D1;
    flex: 1;
    
`;
 export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
 `;


export const HeaderArea = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;

`;
export const HeaderTitle = styled.Text`
    width: 250px;
    fontSize: 24px;
    fontWeight: bold;
    color: #FFF;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;


export const LocationArea = styled.View`
    backgroundColor: #4EADBE;
    height: 60px;
    borderRadius: 30px;
    flexDirection: row;
    alignItems: center;
    paddingLeft: 20px;
    paddingRight: 20px;
    marginTop: 30px;
`;
export const LocationInput = styled.TextInput`
    flex: 1;
    fontSize: 16px;
    color: #FFFFFF;
`;
export const LocaitonFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;


export const LoadingIcon = styled.ActivityIndicator`
    marginTop: 50px;
`;

export const ListArea = styled.View`
    marginTop: 30px;
    marginBottom: 30px;
`;