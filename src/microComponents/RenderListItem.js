import React, {PureComponent} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RenderListItem extends PureComponent {
  render() {
    const {itemToRender, navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('Details', {index: itemToRender.index})
        }>
        <Text style={styles.text}>{itemToRender.item.ip} </Text>
        <Icon name="chevron-right" size={15} color="#000" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
