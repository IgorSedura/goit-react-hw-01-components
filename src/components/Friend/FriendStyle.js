import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
`;
export const Card = styled.li`
  margin-left: auto;
  margin-right: auto;
  background: white;
  width: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Chip = styled.span`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${props => {
    switch (props.status) {
      case 'Online':
        return '#4caf50';
      case 'Offline':
        return '#f44336';
      default:
        return '#f44336';
    }
  }};
`;

export const Avatar = styled.img`
  margin: 0px 10px;
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.primaryText};
  margin-left: 40px;
`;
