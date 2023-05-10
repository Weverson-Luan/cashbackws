/**
 * IMPORT
 */
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue_cyan_200};

`;


const ButtonArrowLeft = styled.TouchableOpacity`
  background-color: transparent;
`;

/**
 * EXPORT
 */
export { Container, ButtonArrowLeft };
