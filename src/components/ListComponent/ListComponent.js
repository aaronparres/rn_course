import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    const placesOutput = props.places.map((place, index) => (
        <ListItem key={index} 
            placeName={place} 
            //onItemPressed={() => alert('item pressed - ID: ' + index)}
        />
      ));
    return (
        <View style={styles.listContainer}>{placesOutput}</View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;