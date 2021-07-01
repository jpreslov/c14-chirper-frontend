import React, { useState } from 'react';
import Timeline from './components/Timeline'


let App = () => {
  let [username, setUsername] = useState('');
  let [msg, setMsg] = useState('');
  let [chirps, setChirps] = useState([
    { username: 'Dwayne Rock JOsnohn', msg: 'can you smell it....' },
    { username: 'swag lord', msg: 'crocs are actually dope' },
    { username: 'Harryy Style', msg: 'hair is actually dope' },
  ]);

  let handleSubmit = (e) => {
    //need this line to stop page refresh
    e.preventDefault();
    let newChirp = {
      username: username,
      msg: msg,
    };

    //redefines existing chirps array and adds newChirp object (without making nested array)
    setChirps([...chirps, newChirp]);
  };

  return (
    <>
      <div className="container">
        <form className="bg-primary m-3 py-4  rounded shadow d-flex justify-content-center make-chirps">
          <input className="m-2" type="text" placeholder="Who are you." value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="m-2" type="text" placeholder="What are you thinking..." value={msg} onChange={(e) => setMsg(e.target.value)} />
          <input className="m-2" type="submit" value="Post chirp" onClick={(e) => handleSubmit(e)} />
        </form>
      </div>
      {chirps.map((chirp, id) => <Timeline chirp={chirp} />)}

      {/* 
      showing chirps directly inside of App component

      {chirps.map((chirp, id) => {
          return (
              <>
              <div className="d-flex flex-column text-center justify-content-center bg-secondary rounded shadow p-2 m-3">
                <p>{chirp.username}</p>
                <h3>{chirp.msg}</h3>
              </div>
              </>
          )
      })} */}

    </>
  );
};

export default App;
