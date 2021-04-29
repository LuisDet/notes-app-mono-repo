import PropTypes from 'prop-types';

const LoginForm = ({
  handleLogin,
  username,
  password,
  handleUsernameChange,
  handlePasswordChange
}) => {
  return (
    <form onSubmit={handleLogin}>
      <input
        type='text'
        value={username}
        name='username'
        placeholder='Username'
        onChange={handleUsernameChange}
      />
      <input
        type='password'
        value={password}
        name='password'
        placeholder='Password'
        onChange={handlePasswordChange}
      />
      <button>Login</button>
    </form>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.string,
  handlePasswordChange: PropTypes.string
};

export default LoginForm;
