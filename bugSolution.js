// bugSolution.js
import * as Constants from 'expo-constants';
import { uuid } from 'uuidv4';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDeviceId = async () => {
  let deviceId = Constants.deviceId;
  if (!deviceId) {
    try {
      deviceId = await AsyncStorage.getItem('deviceId');
      if (!deviceId) {
        deviceId = uuid();
        await AsyncStorage.setItem('deviceId', deviceId);
      }
    } catch (error) {
      console.error('Error retrieving or storing device ID:', error);
      // Handle error appropriately, perhaps fall back to a less reliable identifier
      deviceId = 'fallbackId';
    }
  }
  return deviceId;
};

// Example usage:

getDeviceId().then(id => console.log('Device ID:', id));