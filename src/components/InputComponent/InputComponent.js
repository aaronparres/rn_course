import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default class InputComponent extends Component {
    state = {
        placeName: "",
    }

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val,
        });
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    }


    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder={"An nerdy place"}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                />
                <Button
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    placeInput: {
        width: 300,
        width: "70%",
        // borderColor: "black",
        // borderWidth: 1,
    },
    placeButton: {
        width: "30%",
    },
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
