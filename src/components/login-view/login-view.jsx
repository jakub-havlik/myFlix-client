import React, { useState } from 'react';

export function LoginView(props) {
<<<<<<< Updated upstream
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
=======
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
>>>>>>> Stashed changes

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}
=======

      <button type="submit" onClick={handleSubmit}>Login</button>
      <button onClick={() => { onBackClick(null); }}>New User?</button>
    </form>
  );


}
>>>>>>> Stashed changes
