import { useState, useEffect } from 'react';
import { Notes } from './component/Note';
import Togglable from './component/Togglable';
import LoginFrom from './component/LoginForm';
import loginService from './services/login';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedNoteAppUser');
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson);
      setUser(user);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({ username, password });

      window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(user));

      setUser(user);
      setUsername('');
      setPassword('');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className='App'>
      {!user ? (
        <Togglable buttonLabel='Show login'>
          <LoginFrom
            username={username}
            password={password}
            handleLogin={handleLogin}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
          />
        </Togglable>
      ) : (
        <Notes token={user.token} />
      )}
    </div>
  );
}

export default App;
