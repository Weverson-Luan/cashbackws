/**
 * IMPORTS
 */
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Salva dados no dispositivo do usuário com local storage.
const storeData = async (keyStore: string, dataStore: any): Promise<void> => {
  try {

    const oldData = dataStore;
    const newData = JSON.stringify(oldData);
    await AsyncStorage.setItem(keyStore, newData)
  } catch (error) {
    // saving error
    Alert.alert("Error", "Não foi possível salvar as iformaçãoes feche o app e tente novamente!");
  }
};

// Buscar dados no dispositivo do usuário com local storage.
const getDataStore = async (keyStore: string): Promise<any> => {
  try {

  const data = await AsyncStorage.getItem(keyStore)

  if(data){
    const newData = JSON.parse(data);


    return newData;
  };

  } catch (error) {
    // saving error
    Alert.alert("Error", "Não foi possível buscar as iformaçãoes feche o app e tente novamente!");
  }
};


// Buscar um dado no dispositivo do usuário com local storage.
const getDateOneStore = async (keyStore: string, id?: string): Promise<any> => {
  try {
    const storageData = await AsyncStorage.getItem(keyStore);

    const data = storageData ? (JSON.parse(storageData) as Array<any>): [];

    const dataOne = data.find(item => item.id === id);

    return dataOne;
} catch (error) {
  // saving error
  Alert.alert("Error", "Não foi possível buscar a iformação feche o app e tente novamente!");

};

};


// Remover dados no dispositivo do usuário com local storage.
const removeDataStore = async (keyStore: string): Promise<any> => {
  try {
    const dateRemoved = await AsyncStorage.removeItem(keyStore);

    return dateRemoved;
  } catch(e) {
    // remove error
    Alert.alert("Error", "Não foi possível buscar a iformação feche o app e tente novamente!");
  }

};


/**
 * EXPORTS
 */
export {
  storeData,
  getDataStore,
  getDateOneStore,
  removeDataStore
};
