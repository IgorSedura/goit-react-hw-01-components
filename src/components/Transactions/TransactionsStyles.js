import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
  margin-bottom: 50px;
  border-collapse: collapse;
  margin-top: 40px;
`;
export const Thead = styled.thead`
  & > tr {
    background-color: blue;
  }
`;

export const Th = styled.th`
  font-size: 26px;
  width: 200px;
  color: white;
  padding: 15px;
  border: 1px solid black;
`;

export const Td = styled.td`
  height: 15px;

  text-align: center;

  border: 1px solid black;
  padding-bottom: 15px;
  padding-top: 15px;
  font-weight: bold;
`;
