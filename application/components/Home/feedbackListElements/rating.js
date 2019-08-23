import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import getRating from "../../../utils/getRating";

const Rating = props => {
    const rating = getRating(props.skill);
    const opacity = rating/5;
    return (
        <View style={{...styles.rating, opacity}}>
            <Text style={styles.ratingText}>{rating}</Text>
        </View>
    );
};

export default Rating;