import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const listComponent = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={info => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemDeleted(String(info.item.key))}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default listComponent;