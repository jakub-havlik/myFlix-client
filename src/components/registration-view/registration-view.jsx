import React, { useState } from 'react';

<<<<<<< Updated upstream
export function RegisterView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birhday);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onRegistration(username);
    };

    return (
        <form>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>

            <div class="coc-form">
                <div class="coc-block-row">
                    <label class="coc-block-label" for="dateofbirth">Date Of Birth</label>
                    <div class="coc-block">
                        <input class="coc-input" type="date" name="dateofbirth" id="dateofbirth" />
                    </div>
                </div>
            </div>

            <label>
                Password:
                <input type="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
            </label>
            <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
    );
=======
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


>>>>>>> Stashed changes
}
