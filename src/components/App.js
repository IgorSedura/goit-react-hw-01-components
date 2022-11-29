import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { GlobalStyle } from './GlobalStyles';
import { Statistics } from './Statistics/Statistics';
import stats from '../data/data';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <GlobalStyle />
      <Statistics stats={stats} />
    </div>
  );
};
