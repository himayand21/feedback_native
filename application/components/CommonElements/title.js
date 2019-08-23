import React from 'react';
import {Text} from "react-native";

import { Header} from "native-base";
import styles from "../../styles";

const Title = props => {
        return ( 
        <Header style={{backgroundColor: 'steelblue'}}>
                <Text style = {styles.headerTitleStyle}>{props.name}</Text>
        </Header> );
}
 
export default Title;