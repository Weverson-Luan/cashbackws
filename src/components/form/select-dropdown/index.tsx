/**
 * IMPORTS
 */
import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { CaretDown, CaretUp } from 'phosphor-react-native';
import SelectDropdown from 'react-native-select-dropdown';

// typings
import { DropdownSelectProps } from './interface';

// styles
import { SelectContainer, SelectDropDown, styles } from './styles';

const DropdownSelect = ({
    dataSelected,
    textPlaceholder,
    dropdownIconPosition,
    borderBottomStyle,
    handleOnSelect,
}: DropdownSelectProps) => {
    const theme = useTheme();

    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={'#2D9BB2'} />
            <SelectContainer>
                <SelectDropDown>
                    <SelectDropdown
                        data={dataSelected}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index);
                            handleOnSelect(selectedItem, index);
                        }}
                        defaultButtonText={
                            textPlaceholder ? textPlaceholder : 'Sem informação'
                        }
                        buttonTextAfterSelection={(selectedItem, _index) => {
                            return selectedItem.title;
                        }}
                        rowTextForSelection={(item, _index) => {
                            return item.title;
                        }}
                        buttonStyle={
                            borderBottomStyle
                                ? styles.dropdownBotomStyle
                                : styles.dropdownBtnStyle
                        }
                        buttonTextStyle={styles.dropdownBtnTxtStyle}
                        renderDropdownIcon={isOpened => {
                            return isOpened ? (
                                <CaretUp
                                    color={theme.colors.gray_300}
                                    size={18}
                                />
                            ) : (
                                <CaretDown
                                    color={theme.colors.gray_300}
                                    size={18}
                                />
                            );
                        }}
                        dropdownIconPosition={
                            dropdownIconPosition
                                ? dropdownIconPosition
                                : 'right'
                        }
                        dropdownStyle={styles.dropdownDropdownStyle}
                        rowStyle={styles.dropdownRowStyle}
                        rowTextStyle={styles.dropdownRowTxtStyle}
                        selectedRowStyle={styles.selectedRowStyle}
                    />
                </SelectDropDown>
            </SelectContainer>
        </>
    );
};

export { DropdownSelect };
