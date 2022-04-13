import React, { useState } from 'react';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onRegistration(username);
  };


  return (
    <form>
      <p>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Repeat Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input type="email" value={password} onChange={e => setEmail(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Birthday:
          <input type="birthday" value={password} onChange={e => setBirthday(e.target.value)} />
        </label>
      </p>

      <button type="submit" onClick={handleSubmit}>Register</button>
    </form>
  );


}
