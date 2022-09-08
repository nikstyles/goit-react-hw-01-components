import Profile from './Profile/profile.js';
import Statistics from './Statistics/statistics.js';
import FriendList from './FriendList/friendList.js';
import user from './Profile/user';
import data from './Statistics/data';
import friends from './FriendList/friends';

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
    </>
  );
};
