import publicIP from 'react-native-public-ip';

export const getTime = () => {
  var timeStamp = new Date();
  var formatedTime = timeStamp.toLocaleTimeString();
  return formatedTime;
};

export const getIP = async () => {
  return await publicIP()
    .then((ip) => {
      return ip;
    })
    .catch((error) => {
      console.log(error);
    });
};
