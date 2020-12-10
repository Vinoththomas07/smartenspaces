import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import NoData from '../microComponents/NoData';
import RenderListItem from './../microComponents/RenderListItem';

export default class FlatListView extends Component {
  render() {
    const {data, navigation} = this.props;
    if (data && data.length > 0) {
      return (
        <FlatList
          data={data}
          renderItem={(item) => (
            <RenderListItem itemToRender={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => String(index)}
          nestedScrollEnabled={true}
          scrollEnabled={true}
          style={styles.listView}
        />
      );
    } else return <NoData message="No information to show" />;
  }
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#fff',
  },
});
