/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView } from 'react-native';
const { width } = Dimensions.get('window');
import SelectDropdown from 'react-native-select-dropdown';
import { CaretDoubleDown, CaretDown } from 'phosphor-react-native';

interface DropdownSelectProps {
  handleOnSelect: (selectedItem, index: number) => void;

}

const DropdownSelect = ({ handleOnSelect }: DropdownSelectProps) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCountries([
        //@ts-ignore
        { title: 'Empréstimo 10% - Saia do aperto', cities: [{ title: 'Cairo' }, { title: 'Alex' }] },
        //@ts-ignore
        { title: 'Empréstimo 15% - Saia do sufoco', cities: [{ title: 'Emprestimo' }, { title: 'Quebec City' }] },
        //@ts-ignore
        { title: 'Retirada', cities: [{ title: 'Retirada' }, { title: 'Quebec City' }] },
        //@ts-ignore
        { title: 'Entrada', cities: [{ title: 'Entrada' }, { title: 'Quebec City' }] },
      ]);
    }, 1000);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={styles.viewContainer}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        >
          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                // console.log(selectedItem, index);
                handleOnSelect(selectedItem, index)
              }}
              defaultButtonText={'Escolha uma categoria'}
              searchInputTxtStyle={{ color: 'red' }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <CaretDown color={'#969CB2'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              selectedRowStyle={{ backgroundColor: '#D7DCDC', width: '100%' }}
            />


          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


  viewContainer: { flex: 1, width, backgroundColor: 'transparent', paddingLeft: 12, paddingRight: 12 },

  dropdownsRow: { flexDirection: 'row', width: '100%', paddingHorizontal: '5%' },

  dropdown1BtnStyle: {
    flex: 1,
    height: 64,
    backgroundColor: '#FFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#B5B5B5',
  },
  dropdown1BtnTxtStyle: { color: '#969CB2', textAlign: 'left' },
  dropdown1DropdownStyle: { backgroundColor: '#B5B5B5' },
  dropdown1RowStyle: { marginBottom: 1, backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 },
  dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
  divider: { width: 12 },


});

export {
  DropdownSelect
}