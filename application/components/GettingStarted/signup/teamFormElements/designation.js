import React from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { connect } from "react-redux";

import { updateTeamState, removeDesignation, editDesignation, addSkill } from "../../../../actions/team"
import { Icon, Warning } from "../../../CommonElements";
import styles from "../../../../styles";
import Skills from "./skills";

class Designation extends React.Component {
    state = {
        skill: ""
    }

    onPress = index => {
        this.props.addSkill(index, this.state.skill);
        this.setState({ skill: "" });
    }
    render() {
        const { data } = this.props;
        return (
            <View style={{ ...styles.center, paddingBottom: 25, borderTopWidth: this.props.index === 0 ? 0 : 0.5, borderColor: "lightgrey", paddingHorizontal: 25 }}>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                    <View style={{ flex: 10, marginTop: 25, paddingBottom: 10 }}>
                        <TextInput
                            autoCapitalize={"none"}
                            style={{ fontSize: 23, color: "steelblue", fontWeight: "200" }}
                            value={data.designation}
                            onChangeText={text => this.props.editDesignation(text, data.designation, this.props.index)}
                            placeholder="Add designation..."
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.removeDesignation(this.props.index)}
                        style={{ ...styles.sortButton, marginTop: 25, borderWidth: 0, paddingBottom: 10 }}
                    >
                        <Icon size="small" color="grey" name="trash" />
                    </TouchableOpacity>
                </View>
                {data.error ? <Text style={{color: "red", fontSize: 12}}>{data.error}</Text> : null}
                <Skills
                    skill={this.state.skill}
                    updateState={(title, text) => this.setState({[title]: text})}
                    designation={data.designation}
                    index={this.props.index}
                    onPress={() => this.onPress(this.props.index)}
                    error={data.skillError}
                />
            </View>
        )
    }
}
function mapStatetoProps(state) {
    return {
        store: state.team
    };
}
export default connect(
    mapStatetoProps,
    { removeDesignation, editDesignation, updateTeamState, addSkill }
)(Designation);