/**
 * IMPORT
 */
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 42px;
  padding-right: 42px;
  background-color: ${({theme})=> theme.colors.neutral_50};
`;

/**
 * EXPORT
 */
export {Container};
