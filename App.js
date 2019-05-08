import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {
  state = {
    placeName: "",
    places: [],
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

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <ListItem key={index} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            placeholder={"An awesome place"}
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button 
            title="Add" 
            style={styles.placeButton} 
            onPress={this.placeSubmitHandler} 
          />
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
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
  listContainer: {
    width: "100%"
  }
});
