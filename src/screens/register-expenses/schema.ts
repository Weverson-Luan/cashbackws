/**
 * IMPORTS
 */
import * as yup from 'yup';


/**
 * I am a schema to register validation.
 */
const schemaRegister = yup.object().shape({
  name: yup.string().required('Informe oque deseja realizar!'),
  value: yup.number().typeError('Valor invalído!').required('Digite um valor valído!')
});


/**
* I am a value of register.
*/
const initialValue = {
  name: '',
  value: ''
};

/**
 * EXPORTS
 */
export { schemaRegister, initialValue };