import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import FlatListView from '../components/FlatListView';
import {connect} from 'react-redux';
import {UpdateAddress} from './../store/actions';
import NetInfo from '@react-native-community/netinfo';
import {getTime, getIP, getNetInfo} from '../utils';
import NoData from './../microComponents/NoData';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: '',
      type: 'Offline',
      data: null,
      connected: false,
      isReady: false,
    };
  }

  addIp = async (state) => {
    const {data} = this.props;
    // Get time
    let timeStamp = getTime();
    // Get IP
    let ipInfo = await getIP();
    // Update redux store with new ip
    if (ipInfo) {
      await this.props.dispatch(
        UpdateAddress({ip: ipInfo, time: timeStamp, type: state.type}),
      );
      // Update state with new data
      this.setState({
        data,
        ip: ipInfo,
        connected: state.isConnected,
        type: state.type,
        isReady: true,
      });
    }
  };

  checkForChange = async (state) => {
    const {type} = this.state;
    if (type != state.type) {
      await this.addIp(state);
    } else if (state.isConnected) {
      this.setState({connected: true});
    }
  };

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        this.checkForChange(state);
      } else {
        this.setState({connected: false});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {ip, data, type, connected, isReady} = this.state;
    return (
      <SafeAreaView
        style={[
          styles.container,
          {backgroundColor: connected ? '#055F14' : '#AD1616'},
        ]}>
        {isReady && (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>IP History</Text>
            {connected ? (
              <Text style={styles.headerInfo}>
                Current IP - {ip} ( {type} )
              </Text>
            ) : (
              <Text style={styles.headerInfo}>
                Please check your internet connection
              </Text>
            )}
          </View>
        )}
        <View style={styles.listView}>
          {isReady ? (
            <FlatListView data={data} navigation={this.props.navigation} />
          ) : (
            <NoData message="Loading..." />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({data: state.addresses});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
  },
  headerInfo: {
    color: '#fff',
    fontSize: 12,
    width: '50%',
  },
  listView: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },
});
