import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import Row from '../../components/Row';

class Transitions extends React.Component {

  showCardsabsence = () => {
    this.props.navigator.showModal({
      title: 'Cards',
      screen: 'absence.Students.SharedElementTransitions.Cards',
    });
  };

  showProfileabsence = () => {
    this.props.navigator.showModal({
      title: 'Profiles',
      screen: 'absence.Students.SharedElementTransitions.Profiles',
    });
  };

  showMasonryabsence = () => {
    this.props.navigator.showModal({
      title: 'Masonry',
      screen: 'absence.Students.SharedElementTransitions.Masonry',
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Row title={'Cards'} onPress={this.showCardsabsence}/>
        {/*<Row title={'Profiles'} onPress={this.showProfileabsence} />*/}
        <Row title={'Masonry'} onPress={this.showMasonryabsence}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default Transitions;
