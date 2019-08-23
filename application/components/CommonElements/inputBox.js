import React, { Component } from 'react';
import { View, TextInput, Animated, Text } from 'react-native';
import styles from "../../styles";

class InputBox extends Component {
  state = {
    isFocused: false,
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(0);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.input ? 1 : 0,
      duration: 200,
    }).start();
  }
  componentDidMount() {
      Animated.timing(this._animatedIsFocused, {
        toValue: this.state.isFocused || this.props.input ? 1 : 0,
        duration: 200,
      }).start();
  }
  render() {
    const labelStyle = {
      position: 'absolute',
      left: 0,
      fontWeight: "500",
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [10, -10],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [11, 12],
      }),
      color: "black"
    };
    return (
      <View style={{width: "100%", marginTop: this.props.marginTop || 25}}>
        {this.props.placeholder ?
          <View>
            <Text style={styles.inputHeading}>{`${this.props.title.toUpperCase().replace(/_/g, " ")} `}</Text>
            <TextInput
              autoCapitalize={"none"}
              placeholder={this.props.placeholder}
              style={styles.inputText}
              value={this.props.input}
              onChangeText={text => this.props.updateState(this.props.title, text)}
              secureTextEntry={this.props.title === "password"}
              blurOnSubmit
            />
          </View> :
          <View style={{marginTop: 10}}>
            <Animated.Text style={labelStyle}>
            {`${this.props.title.toUpperCase().replace(/_/g, " ")} `}
            </Animated.Text>
            <TextInput
              autoCapitalize={"none"}
              onChangeText={text => this.props.updateState(this.props.title, text)}
              secureTextEntry={this.props.title === "password"}
              value={this.props.input}
              style={styles.inputText}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              blurOnSubmit
            /></View>}
      </View>
    );
  }
}

export default InputBox;
