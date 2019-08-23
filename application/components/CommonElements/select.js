import React from 'react';
import { Text, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Icon as NativeIcon } from "native-base";

import styles from "../../styles";

const Select = props => {
    const pickerStyle = {
        textAlignVertical: 'bottom',
        inputIOS: {
            ...styles.inputText,
            color: "black"
        },
        iconContainer: {
            top: 5,
            right: 5,
        },
    }
    return (
        <View style={{width: "100%", marginTop: 25, borderBottomColor: 'steelblue', borderBottomWidth: 1}}>
            <Text style={styles.inputHeading}>{props.title.toUpperCase()}</Text>
            <RNPickerSelect
                hideDoneBar={true}
                Icon={() => {
                    return <NativeIcon type="FontAwesome5" name="chevron-down" style={{color: 'slategray', alignContent: 'flex-end', justifyContent:'flex-end', fontSize: 10, marginTop: 7}}/>
                }}
                useNativeAndroidPickerStyle={false}
                value={props.value}
                style={pickerStyle}
                onValueChange={props.onChange}
                items={props.items}
                 />
        </View>
    )
}
export default Select;