import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    backgroundColor: #FFF;
    flex: 1;
    

`;

export const Scroller = styled.ScrollView`
    flex: 1;

`;
export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    backgroundColor: #FFF;
    borderRadius: 5px;
    margin: 3px;

`;
export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    backgroundColor: #000;
    borderRadius: 5px;
    margin: 3px;


`;

export const SwipeItem = styled.View`

    flex: 1;
    backgroundColor: #63C2D1;

`;

export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;

`;

export const FakeSwiper = styled.View`
    height: 140px;
    backgroundColor: #63C2D1;

`;
export const PageBody = styled.View`
    backgroundColor: #FFF;
    borderTopLeftRadius: 50px;
    marginTop: -50px;
    minHeight: 400px
   
`;
export const UserInfoArea = styled.View`
    flexDirection: row;
    marginTop: -30px;

`;
export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    borderRadius: 20px;
    marginLeft: 30px;
    marginRight: 20px;
    borderWidth: 4px;
    borderColor: #FFF; 

`;
export const UserInfo = styled.View`
    flex: 1;
    justifyContent: flex-end;
`;
export const UserInfoName = styled.Text`
    color: #000;
    fontSize: 18px;
    fontWeight: bold;
    marginBottom: 10px;
`;
export const UserFavButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    backgroundColor: #FFF;
    border: 2px solid #999999;
    borderRadius: 20px;
    justifyContent: center;
    alignItems: center;
    marginTop: 20px;
    marginRight: 20px;
    marginLeft: 20px;

`;


export const ServiceArea = styled.View`
    marginTop: 40px;
`;
export const ServicesTittle = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    color: #268596;
    marginLeft: 30px;
    marginBottom: 20px;
`;

export const ServiceItem = styled.View`
    flexDirection: row;
    marginLeft: 30px;
    marginRight: 30px;
    marginBottom: 20px;

`;

export const ServiceInfo = styled.View`
    flex:1; 
`;
export const ServiceName = styled.Text`
    fontSize: 16px;
    fontWeight: bold;
    color: #268596;
`;
export const ServicePrice = styled.Text`
    fontSize: 14px;
    color: #268596;
`;
export const ServiceChooseButton = styled.TouchableOpacity`
    backgroundColor: #4EADBE;
    borderRadius: 10px;
    padding: 10px 15px;
`;
export const ServiceChooseBtnText = styled.Text`
    fontSize: 14px;
    fontWeight: bold;
    color: #FFF;
`;

export const TestimonialArea = styled.View`
    marginTop: 30px;
    marginBottom: 50px;

`;
export const TestimonialItem = styled.View`
    backgroundColor: #268596;
    padding: 15px;
    borderRadius: 10px;
    height: 110px;
    justifyContent: center;
    marginLeft: 50px;
    marginRight: 50px;
    

`;
export const TestimonialInfo = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    marginBottom: 5px;

`;
export const TestimonialName = styled.Text`
    color: #FFF;
    fontSize: 14px;
    fontWeight: bold;

`;
export const TestimonialBody = styled.Text`
    color: #FFF;
    fontSize: 13px;

`;


export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 40;
    z-index: 9;

`;

export const LoadingIcon = styled.ActivityIndicator`
    marginTop: 50px;
`;



