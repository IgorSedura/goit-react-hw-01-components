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

export const Avatar = styled.img`
  border: 1px solid rgb(34, 34, 34);
  object-fit: cover;
  border-radius: 50%;
  width: 150px;
  margin-top: 20px;
`;

export const UserName = styled.p`
  color: ${props => props.theme.colors.primaryText};
  text-align: center;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ProfileTag = styled.p`
  margin-bottom: 0px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const UserLocation = styled.p`
  color: ${props => props.theme.colors.secondaryText};
`;

export const Info = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Social = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  background: ${props => props.theme.colors.backgroundColor};
`;

export const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
  width: 100%;
`;

export const ItemText = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: 600;
`;
