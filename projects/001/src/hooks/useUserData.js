import { useState, useEffect } from 'react';
import { getRandomUser, getPostsByUser } from '../services/user';

export function useUserData () {
  const [user, setUser] = useState({});

  useEffect(() => { refreshRandomUser(); }, []);

  //   useEffect(() => {
  //     if (Object.keys(user).length > 0) console.log(user);
  //   }, [user]);

  const refreshRandomUser = () => {
    getRandomUser().then((newUser) => {
      const { id } = newUser;

      getPostsByUser({ id }).then((posts) => setUser({ ...newUser, ...posts }));
    });
  };

  return { user, refreshRandomUser };
}
