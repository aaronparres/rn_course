import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import InputComponent from './src/components/InputComponent/InputComponent';
import ListComponent from './src/components/ListComponent/ListComponent';
import placeImage from './src/assets/villena.jpg';

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({ 
          key: String(Math.random()), 
          name: placeName,
          image: placeImage,
        })
      };
    });
  };

  itemDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <InputComponent onPlaceAdded={this.placeAddedHandler} />
        <ListComponent places={this.state.places} onItemDeleted={this.itemDeletedHandler} />
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
