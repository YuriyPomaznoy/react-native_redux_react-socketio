import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = (props) => {
    return (
      <View style={props.inputMsg.himself ? styles.wrapItemLeft : styles.wrapItemRight}>
        <View style = {props.inputMsg.himself ? styles.listItemLeft : styles.listItemRight}>
          <Text style={styles.t}>{ props.inputMsg.msg }</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  wrapItemLeft: {
    alignItems: 'flex-start'
  },
  wrapItemRight: {
    alignItems: 'flex-end'
  },
  listItemRight: {
    width: '80%',
    padding: 8,
    margin: 5,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
  },
  listItemLeft: {
    width: '80%',
    padding: 8,
    margin: 5,
  },
  t: { fontSize: 20 },
});

export default ListItem;