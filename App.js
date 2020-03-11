import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './components/ListItem/listItem';
import { connect } from 'react-redux';

import { appActions } from './core/app'

class App extends Component {
  
  componentDidMount() {
    this.props.sendMessage('Hello World!!!')
  }

  msgSubmitHandler = () => {
    if(this.props.msg.trim() === '') {
      return;
    }
    this.props.sendMessage(this.props.msg);
    this.inpChangeHandler('');
  }

  inpChangeHandler = (value) => {
    this.props.inputChangeHandler(value)   
  }

  placesOutput = () => {
     return (
      <FlatList style = { styles.listContainer }
        ref = {e => this.flatList = e}
        onContentSizeChange = {() => this.flatList.scrollToEnd({animated: true})}
        data = { this.props.messages }
        keyExtractor = {(item, index) => index.toString()}
        renderItem = { info => (
          <ListItem 
            inputMsg={ info.item.payload }
          />
        )}
      />
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style = { styles.inputContainer }>
          <TextInput
            placeholder = "Messages"
            style = { styles.placeInput }
            value = { this.props.msg }
            onChangeText = { this.inpChangeHandler }
          ></TextInput>
          <Button title = 'Send' 
            style = { styles.placeButton }
            onPress = { this.msgSubmitHandler }
          />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    flex: 1,
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    msg: state.messages.msg,
    messages: state.messages.messages,
  }
}

const mapDispatchToProps = {
  inputChangeHandler: appActions.inputChangeHandler,
  sendMessage: appActions.sendMessage,
  //addToList: appActions.addToList,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)