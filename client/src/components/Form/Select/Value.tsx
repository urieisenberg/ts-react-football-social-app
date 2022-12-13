import { components } from 'react-select';
import styled from 'styled-components'; 

const Container = styled.div`
  display: flex;
  background: transparent;
  text-align: left;
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  @media (max-width: 576px) {
    text-align: center;
    justify-content: center;
  }
  > span {
    margin-left: 5px;
  }
`;

export const Value = (props: any) => {
  return (
    <components.SingleValue {...props}>
      <Container>
        <img
          src={props.data.image}
          alt={props.data.label as string}
          width={30}
        />
        <span>{props.data.label}</span>
      </Container>
    </components.SingleValue>
  );
};