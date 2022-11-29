import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  Info,
  Social,
  SocialItem,
  UserName,
  ProfileTag,
  UserLocation,
  ItemText,
} from '../Profile/ProfileStyle';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Info>
        <Avatar src={avatar} alt="avatar" />
        <UserName>{username}</UserName>
        <ProfileTag>{tag}</ProfileTag>
        <UserLocation>{location}</UserLocation>
      </Info>
      <Social>
        <SocialItem>
          <ItemText>Followers</ItemText>
          <ItemText>{stats.followers}</ItemText>
        </SocialItem>
        <SocialItem>
          <ItemText>Views</ItemText>
          <ItemText>{stats.views}</ItemText>
        </SocialItem>
        <SocialItem>
          <ItemText>Likes</ItemText>
          <ItemText>{stats.likes}</ItemText>
        </SocialItem>
      </Social>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
