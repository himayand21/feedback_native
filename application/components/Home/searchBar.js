import React from 'react';
import { View, TouchableOpacity } from "react-native";
import { InputBox, Icon } from "../CommonElements";
import styles from "../../styles";

const SearchBar = props => {
    return (
        <View style={{ paddingHorizontal: 30, flexDirection: "row" }}>
            <View style={{ flex: 7 }}>
                <InputBox
                    placeholder={props.parameter === "name" ? "Applicants..." : props.parameter === "designation" ? "Job titles..." : "Interviewers..."}
                    title={"search"}
                    updateState={props.updateState}
                    input={props.search}
                />
            </View>
            <TouchableOpacity style={styles.sortButton} onPress={() => props.toggleModal()}>
                <Icon size="small" name="sort" color="steelblue" />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar;