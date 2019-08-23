import React from 'react';
import { View } from "react-native";
import { InputBox } from "../CommonElements";

const SearchBar = props => {
    return (
        <View style={{ paddingHorizontal: 30, flexDirection: "row" }}>
            <View style={{ flex: 7 }}>
                <InputBox
                    placeholder={props.placeholder}
                    title={"search"}
                    updateState={props.updateState}
                    input={props.search}
                />
            </View>
        </View>
    )
}

export default SearchBar;