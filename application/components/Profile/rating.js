import React from "react";
import { Text, View } from "react-native";
import { Star } from "../CommonElements";
import { Left, Right } from "native-base";

const Rating = props => {
  const { skill } = props;
  return (
    <View style={{ paddingTop: 10 }}>
      {Object.keys(skill).map((skillName, index) => (
        <View
          style={{ flexDirection: "row", width: "100%", paddingVertical: 5 }}
          key={"star-" + index}
        >
          <Left>
            <Text>{skillName}</Text>
          </Left>
          <Right>
            <Star disabled={true} rating={skill[skillName]} />
          </Right>
        </View>
      ))}
    </View>
  );
};

export default Rating;
