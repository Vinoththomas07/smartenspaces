import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import DetailItem from './../microComponents/DetailItem';

class Details extends Component {
  render() {
    const {index} = this.props.route.params;
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <DetailItem title="IP Address" data={data[index].ip} />
        <DetailItem title="Network type" data={data[index].type} />
        <DetailItem title="Changed at" data={data[index].time} />
        <DetailItem
          title="Change log"
          data={
            (data[index + 1] && data[index + 1].type
              ? data[index + 1].type
              : 'Offline') +
            ' to ' +
            data[index].type
          }
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({data: state.addresses});

export default connect(mapStateToProps)(Details);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderRadius: 20,
    elevation: 10,
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
  },
});
