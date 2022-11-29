import styled from 'styled-components';

export const Card = styled.div`
  margin-left: auto;
  margin-right: auto;
  background: white;
  width: 300px;
  margin-top: 30px;
  margin-bottom: 40px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 20px;
  color: ${props => props.theme.colors.primaryText};
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-around;
`;
export const ListlItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.color};
  width: 100%;
  color: ${props => props.theme.colors.white};
  padding-top: 15px;
  padding-bottom: 15px;
`;
