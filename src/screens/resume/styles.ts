/**
 * IMPORT
 */
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
`;


const WrapperLoading = styled.View.attrs({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

})`
`;


/**
 * EXPORT
 */
export {Container, WrapperLoading};
