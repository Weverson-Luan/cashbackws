/**
 * IMPORTS
 */

interface DataOptions {
  id: string;
  name: string;
  value: string;
}

type DropdownSelectProps = {
  dataSelected: DataOptions[];
  textPlaceholder: string;
  dropdownIconPosition: 'left' | 'right';
  borderBottomStyle: boolean;
  handleOnSelect: (selectedItem: DataOptions, index: number) => void;
  handleOnTextAfterSelect?: (selectedItem, index: number) => any;
  handleOnTextForSelect?: (selectedItem, index: number) => any
  handleOnTest?: (selectedItem, index) => any
}


/**
 * EXPORTS
 */
export type {
  DropdownSelectProps
}
