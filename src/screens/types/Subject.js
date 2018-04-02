import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

class Subject extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'PreviewActionPress') {
      if (event.id === 'action-cancel') {
        Alert.alert('Cancelled');
      }
      if (event.id === 'action-delete-sure') {
        Alert.alert('Deleted');
      }
    }
  }



  render() {
    return (
      <View style={styles.container}>
        <Text>Pushed Screen</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 16
  }
});

export default Subject;
