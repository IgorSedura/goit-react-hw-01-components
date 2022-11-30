import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { GlobalStyle } from './GlobalStyles';
import { Statistics } from './Statistics/Statistics';
import stats from '../data/data.json';
import { Friend } from './Friend/Friend';
import friends from '../data/friends.json';
import { Transaction } from './Transactions/Transactions';
import transactions from '../data/transactions.json';

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
      <Friend friends={friends} />
      <Transaction transactions={transactions} />
    </div>
  );
};
