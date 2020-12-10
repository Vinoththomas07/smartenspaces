import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class DetailItem extends PureComponent {
  render() {
    const {title, data} = this.props;
    return (
      <View>
        <Text style={styles.head}>{title}</Text>
        <Text style={styles.value}>{data} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
  },
  value: {
    fontSize: 14,
    marginTop: 5,
  },
});
