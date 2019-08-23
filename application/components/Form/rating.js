import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import {onStarClick, removeRating} from "../../actions/form";
import { Star, SubHeader, Icon } from "../CommonElements";
import styles from "../../styles";

const Rating = props => {
  const { rating } = props;
  return (
    <View style={{ width: "100%" }}>
      {rating ? <SubHeader text="Skills" /> : null}
      <View style={{ paddingTop: 10 }}>
        {Object.keys(rating).map((skill, index) => (
          <View
            style={{ flexDirection: "row", width: "100%", paddingVertical: 5 }}
            key={"star-" + index}
          >
            <View style={{ flex: 4 }}>
              <Text>{skill}</Text>
            </View>
            <View style={{ flex: 3 }}>
              <Star
                disabled={false}
                rating={rating[skill]}
                action={rating => props.onStarClick(rating, skill)}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <TouchableOpacity
                onPress={() => props.removeRating(skill)}
                style={{ ...styles.submitButton, paddingVertical: 3, backgroundColor: "white" }}
              >
                <Icon size="small" color="gray" name="trash"/>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
function mapStatetoProps(state) {
  return {
    rating: state.form.rating
  };
}
export default connect(
  mapStatetoProps,
  {
    onStarClick,
    removeRating
  }
)(Rating);
