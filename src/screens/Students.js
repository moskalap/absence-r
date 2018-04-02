import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import Row from '../components/Row';

class Students extends React.Component {

  showCollapsingHeader = () => {
    this.props.navigator.showModal({
      title: 'Collapsing Header',
      screen: 'absence.Students.CollapsingHeader',
    });
  };

  showSharedElementTransitions = () => {
    this.props.navigator.showModal({
      title: 'Shared Element Transition absences',
      screen: 'absence.Students.SharedElementTransitions',
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Row title={'Collapsing Header'} onPress={this.showCollapsingHeader}/>
        <Row title={'Shared Element Transition'} onPress={this.showSharedElementTransitions}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Students;
