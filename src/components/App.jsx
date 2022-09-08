import Profile from './Profile/profile.js';
import Statistics from './Statistics/statistics.js';
import FriendList from './FriendList/friendList.js';
import TransactionHistory from './TransactionHistory/transactionHistory.js';

import user from './Profile/user';
import data from './Statistics/data';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
