import { Table, Thead, Th, Td } from './TransactionsStyles';

export const Transaction = ({ transactions }) => {
  return (
    <div>
      <Table>
        <Thead>
          <tr>
            <Th>Type</Th>
            <Th>Amount </Th>
            <Th>Currency</Th>
          </tr>
        </Thead>
        <tbody>
          {transactions.map(({ type, amount, id, currency }) => (
            <tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
