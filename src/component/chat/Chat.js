import React, { useState, useEffect } from "react";
import "./Chat.css";
import {useParams} from "react-router-dom";
import moment from 'moment';

function Chat({ connect }) {
  
  const [chats, setchats] = useState([]);
  const {name,room}=useParams();
  
  const [message,setmessage]=useState({name,room,message:'',time:moment().startOf('day').fromNow()})
  
  

  const chatSubmit = (e) => {
    e.preventDefault();

    setchats([...chats, message]);
    connect.emit('message',message)
  };
  connect.on('chat',chat=>{
    
    setchats([...chats,chat])
  })

  const PrintChats =()=> chats.map((chat, index) => {
    
    return (
      <li key={index}>
        <span className="name">{chat.name}{' '}</span>{chat.time}<br/>:{chat.message}
      </li>
    );
  });

  const onText = (e) => {
     setmessage({...message,message:e.target.value})
  };
  return (
    <div>
      <ul id="messages">{<PrintChats/>}</ul>
      <form className="form" onSubmit={chatSubmit}>
        <input
          id="input"
          name="message"
          placeholder="message"
          onChange={onText}
        />
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
