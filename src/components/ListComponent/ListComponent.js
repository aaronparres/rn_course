import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={info => (
                <ListItem
                    placeName={info.item.value}
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

export default placeList;