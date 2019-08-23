import React from "react";
import { View, Text } from "react-native";

const Details = props => {
    const { details } = props;
    return (
        <View style={{ paddingTop: 10 }}>
            {Object.keys(details).map((detail, index) =>
                <View style={{ flexDirection: 'row', width: '100%', paddingVertical: 5 }} key={'detail-' + index}>
                    <View style={{ flex: 1 }}>
                        <Text>
                            {detail.replace(/_/g, " ")}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{color: 'steelblue', fontWeight: '400', textAlign: 'right'}}>{details[detail]}</Text>
                    </View>
                </View>
            )}
        </View>
    );
};

export default Details;