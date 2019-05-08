import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import InputComponent from './src/components/InputComponent/InputComponent';
import ListComponent from './src/components/ListComponent/ListComponent';

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <InputComponent onPlaceAdded={this.placeAddedHandler} />
        <ListComponent places={this.state.places} />
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
});
