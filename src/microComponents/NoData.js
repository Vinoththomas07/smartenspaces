import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class NoData extends PureComponent {
  render() {
    const {message} = this.props;
    return (
      <View style={styles.noData}>
        <Text>{message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noData: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
