import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { connect } from "react-redux";

import {updateFormState} from "../../actions/form";
import styles from "../../styles";

class DateOfInterview extends Component {
    state = {
        isDateTimePickerVisible: false,
        color: ""
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = date => {
        this.setState({color: "black"});
        this.props.updateFormState('date_of_interview', date);
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={{ width: "100%", marginTop: 25 }}>
                <View style={styles.input}>
                    <Text style={styles.inputHeading}>{"DATE OF INTERVIEW"}</Text>
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                        <View style={{borderBottomColor: "steelblue"}}>
                            <Text style={{...styles.inputText, color: this.state.color || "lightgray"}}>
                                {this.props.dateOfInterview
                                    .toISOString()
                                    .substring(0, 10)
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <DateTimePicker
                    date={this.props.dateOfInterview || new Date()}
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
            </View>
        );
    }
}
function mapStatetoProps(state) {
    return {
      dateOfInterview: state.form.date_of_interview,
    };
  }
  
export default connect(
    mapStatetoProps,
    {
      updateFormState,
    }
)(DateOfInterview);