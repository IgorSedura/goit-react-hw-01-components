import PropTypes from 'prop-types';
import { Card, Chip, Avatar, Name, List } from './FriendStyle';

export const Friend = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Card key={id}>
          <Chip status={isOnline ? 'Online' : 'Offline'}></Chip>
          <Avatar src={avatar} alt="User avatar" width="48" />

          <Name>{name}</Name>
        </Card>
      ))}
    </List>
  );
};

Friend.propsType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
