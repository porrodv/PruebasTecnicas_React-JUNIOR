import './App.css';
import { useUserData } from './hooks/useUserData';
import { UserCard } from './components/UserCard';

function App () {
  const { user, refreshRandomUser } = useUserData();

  const handleClick = () => {
    refreshRandomUser();
  };
  return (
    <>
      {Object.keys(user).length > 0 && (
        <>
          <header className='btn-container'>
            <button id='reset__btn' onClick={handleClick}>
              Refresh
            </button>
          </header>
          <UserCard user={user} />
        </>
      )}
    </>
  );
}

export default App;
