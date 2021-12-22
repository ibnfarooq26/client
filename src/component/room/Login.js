import React from "react";
import {useNavigate}  from 'react-router-dom'

function Login({connect}) {
  let name = "";
  let room = "";
  let navigate=useNavigate();
  const startChat=(e)=>{
      e.preventDefault();
      connect.emit('join_room',{name,room});
    navigate(`/chat/${name}/${room}`)
  }

  return (
    <form onSubmit={startChat}>
      <input
        placeholder="name"
        onChange={(e) => {
          name = e.target.value;
        }}
      />
      <input
        placeholder="room"
        onChange={(e) => {
          room = e.target.value;
        }}
      />
      <button type='submit'>start chat</button>
    </form>
  );
}

export default Login;
