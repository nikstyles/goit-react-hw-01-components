import Profile from './Profile/profile.js';
import Statistics from './Statistics/statistics.js';
import user from './Profile/user';
import data from './Statistics/data';

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
    </>
  );
};
