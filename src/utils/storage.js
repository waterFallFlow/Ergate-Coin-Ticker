import { AsyncStorage } from 'react-native';

const getItem = (type, callback) => {
  AsyncStorage.getItem(type, (err, result) => {
    let data = JSON.parse(result);
    // console.log(`getItem: ${type}`, data);
    if (typeof callback === 'function') { callback(data) };
    return data;
  });
};

const setItem = (type, storeObj, callback) => {
  AsyncStorage.setItem(type, JSON.stringify(storeObj), (err, result) => {
    getItem(type, callback);
  });
};

const mergeItem = (type, storeObj, callback) => {
  AsyncStorage.mergeItem(type, JSON.stringify(storeObj), () => {
    getItem(type, callback);
  });
};

const removeItem = (type, callback) => {
  AsyncStorage.removeItem(type, () => {
    getItem(type, callback);
  });
};

const processStoreItem = (type, processType, storeObj, callback) => {
  switch (processType) {
    case 'get':
      getItem(type, callback);
      break;
    case 'set':
      setItem(type, storeObj, callback);
      break;
    case 'merge':
      mergeItem(type, storeObj, callback);
      break;
    case 'remove':
      removeItem(type, callback);
      break;
    default:
      return;
  }
};

const localStorage = (type, processType, storeObj, callback) => {
  switch (type) {
    case 'randomConfig':
      processStoreItem(type, processType, storeObj, callback);
      break;
    default:
      return console.log('can not find this kind of storage');
  }
}

export default localStorage;
