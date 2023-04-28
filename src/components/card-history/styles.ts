/**
 * IMPORTS
 */
import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
}


const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color:#FFF;
  flex-direction: row;
  justify-content: space-between;
  padding: 13px 24px;
  border-radius: 6px;
  border-left-width: 6px;
  border-left-color: ${({ color})=> color};
  margin-bottom: 8px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #363F5F;

`;

const TextValue = styled.Text`
 font-family: sans-serif;
 font-size: 16px;
 font-weight: bold;
 color: #363F5F;


`;


/**
 * EXPORTS
 */
export {
  Container,
  Title,
  TextValue
}
