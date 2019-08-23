import React from "react";
import { View, Text } from "react-native";
import styles from "../../../styles";
import Interviewer from "./interviewer";

const InterviewerList = props => {
    return (
        <View>
            {props.data.length ? (
                <View
                    style={{
                        ...styles.form,
                        paddingVertical: 0,
                        paddingHorizontal: 0,
                        marginTop: 10,
                    }}
                >
                    {props.data.map((interviewer, index) => (
                        <Interviewer
                            length={props.data.length}
                            key={"interviewer" + index}
                            interviewer={interviewer}
                            index={index}
                            {...props}
                        />
                    ))}
                </View>
            ) : (
                    <Text
                        style={{
                            color: "slategray",
                            fontWeight: "100",
                            fontSize: 22,
                            paddingLeft: 30,
                            paddingTop: 20
                        }}
                    >
                        No Interviewers found.
                    </Text>
                )}
        </View>
    );
};

export default InterviewerList;